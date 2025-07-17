"use server";

import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth/next";
import { z } from "zod";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/db";

const createTeamSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Team name must be at least 2 characters long." })
    .max(50, { message: "Team name must be 50 characters or less." }),
  description: z
    .string()
    .max(200, { message: "Description must be 200 characters or less." })
    .optional(),
});

export type TeamFormState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[] | undefined>;
  newTeamId?: string;
};

export async function createTeamAction(
  _prevState: TeamFormState,
  formData: FormData,
): Promise<TeamFormState> {
  const session = await getServerSession(authOptions);

  if (!session || !session.user || !session.user.id) {
    return {
      success: false,
      message: "User not authenticated.",
    };
  }

  const rawFormData = Object.fromEntries(formData.entries());
  const validatedFields = createTeamSchema.safeParse(rawFormData);

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Validation failed.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    // Generate a URL-friendly slug from the team name
    const slug = validatedFields.data.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

    // Check if slug already exists
    const existingTeam = await prisma.team.findUnique({
      where: { slug },
    });

    if (existingTeam) {
      return {
        success: false,
        message:
          "A team with this name already exists. Please choose a different name.",
      };
    }

    // Create team and add user as owner in a transaction
    const result = await prisma.$transaction(async (tx) => {
      const team = await tx.team.create({
        data: {
          name: validatedFields.data.name,
          slug,
          description: validatedFields.data.description || null,
        },
      });

      await tx.teamMember.create({
        data: {
          userId: session.user.id,
          teamId: team.id,
          role: "owner",
        },
      });

      return team;
    });

    revalidatePath("/");
    return {
      success: true,
      message: "Team created successfully!",
      newTeamId: result.id,
    };
  } catch (error) {
    console.error("Error creating team:", error);
    return {
      success: false,
      message: "Failed to create team. Please try again.",
    };
  }
}

// Action to delete a team
export async function deleteTeamAction(
  _prevState: TeamFormState,
  formData: FormData,
): Promise<TeamFormState> {
  const session = await getServerSession(authOptions);

  if (!session || !session.user || !session.user.id) {
    return {
      success: false,
      message: "User not authenticated.",
    };
  }

  const teamId = formData.get("teamId") as string;
  const confirmedTeamName = formData.get("confirmedTeamName") as string;

  if (!teamId || !confirmedTeamName) {
    return {
      success: false,
      message: "Missing team ID or team name for confirmation.",
    };
  }

  try {
    // Check if user is the owner of the team
    const teamMembership = await prisma.teamMember.findFirst({
      where: {
        teamId: teamId,
        userId: session.user.id,
        role: "owner",
      },
      include: {
        team: true,
      },
    });

    if (!teamMembership || !teamMembership.team) {
      return {
        success: false,
        message: "Team not found or you do not have permission to delete it.",
      };
    }

    if (teamMembership.team.name !== confirmedTeamName) {
      return {
        success: false,
        message: "The entered team name does not match. Deletion cancelled.",
      };
    }

    // Delete the team (this will cascade delete all related data)
    await prisma.team.delete({
      where: {
        id: teamId,
      },
    });

    revalidatePath("/");

    return {
      success: true,
      message: `Team "${teamMembership.team.name}" deleted successfully.`,
    };
  } catch (error) {
    console.error("Error deleting team:", error);
    return {
      success: false,
      message: "Failed to delete team. Please try again.",
    };
  }
}

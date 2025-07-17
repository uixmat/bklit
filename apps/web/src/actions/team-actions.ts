"use server";

import { prisma } from "@/lib/db";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import { revalidatePath } from "next/cache";
import { z } from "zod";

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
  prevState: TeamFormState,
  formData: FormData
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

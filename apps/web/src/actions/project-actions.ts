"use server";

// import { z } from 'zod'; // Unused, schema is imported directly
import { prisma } from "@/lib/db";
import { addProjectSchema } from "@/lib/schemas/project-schema";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import { revalidatePath } from "next/cache";

export type FormState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[] | undefined>;
};

export async function createProjectAction(
  prevState: FormState, // Not used initially, but good for progressive enhancement
  formData: FormData
): Promise<FormState> {
  const session = await getServerSession(authOptions);

  if (!session || !session.user || !session.user.id) {
    return {
      success: false,
      message: "User not authenticated.",
    };
  }

  const rawFormData = Object.fromEntries(formData.entries());
  const validatedFields = addProjectSchema.safeParse(rawFormData);

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Validation failed.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Check if user already has a project (limit to one for now)
  const existingProject = await prisma.site.findFirst({
    where: { userId: session.user.id },
  });

  if (existingProject) {
    return {
      success: false,
      message: "You can only create one project at this time.",
    };
  }

  try {
    await prisma.site.create({
      data: {
        name: validatedFields.data.name,
        domain: validatedFields.data.domain || null, // Ensure null if empty string for optional URL
        userId: session.user.id,
      },
    });

    revalidatePath("/dashboard"); // Revalidate dashboard to show new project
    return {
      success: true,
      message: "Project created successfully!",
    };
  } catch (error) {
    console.error("Error creating project:", error);
    return {
      success: false,
      message: "Failed to create project. Please try again.",
    };
  }
}

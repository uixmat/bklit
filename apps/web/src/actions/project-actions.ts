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

  // Get user's current plan and project count
  const dbUser = await prisma.user.findUnique({
    where: { id: session.user.id },
    include: { _count: { select: { sites: true } } }, // Count existing sites (projects)
  });

  if (!dbUser) {
    return {
      success: false,
      message: "User not found.", // Should not happen if session is valid
    };
  }

  const userPlan = dbUser.plan || "free";
  const projectCount = dbUser._count.sites;

  if (userPlan === "free" && projectCount >= 1) {
    return {
      success: false,
      message:
        "Free plan allows only 1 project. Please upgrade to create more.",
    };
  } else if (userPlan === "pro" && projectCount >= 5) {
    return {
      success: false,
      message: "Pro plan allows up to 5 projects.",
    };
  }
  // If other plans are added, extend this logic

  try {
    await prisma.site.create({
      data: {
        name: validatedFields.data.name,
        domain: validatedFields.data.domain || null, // Ensure null if empty string for optional URL
        userId: session.user.id,
      },
    });

    revalidatePath("/"); // Revalidate root path or a specific dashboard path if applicable
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

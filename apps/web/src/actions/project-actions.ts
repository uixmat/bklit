"use server";

// import { z } from 'zod'; // Unused, schema is imported directly
import { prisma } from "@/lib/db";
import { addProjectSchema } from "@/lib/schemas/project-schema";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import { revalidatePath } from "next/cache";
import { getPlanDetails, PlanType } from "@/lib/plans"; // Import plan helpers

export type FormState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[] | undefined>;
  newSiteId?: string;
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

  const dbUser = await prisma.user.findUnique({
    where: { id: session.user.id },
    include: { _count: { select: { sites: true } } },
  });

  if (!dbUser) {
    return {
      success: false,
      message: "User not found.",
    };
  }

  // Use session.user.plan as it's updated via JWT callback and more likely to be fresh after plan changes
  const currentPlanId = session.user.plan || PlanType.FREE;
  const planDetails = getPlanDetails(currentPlanId);
  const projectCount = dbUser._count.sites;

  if (projectCount >= planDetails.projectLimit) {
    let message = `Your current ${planDetails.name} plan allows up to ${planDetails.projectLimit} project(s).`;
    if (currentPlanId === PlanType.FREE) {
      message += " Please upgrade to the Pro plan to create more projects.";
    } else {
      message += " You have reached the maximum limit for your plan."; // Generic for Pro or other future plans
    }
    return {
      success: false,
      message: message,
    };
  }

  try {
    const newSite = await prisma.site.create({
      data: {
        name: validatedFields.data.name,
        domain: validatedFields.data.domain || null,
        userId: session.user.id,
      },
    });

    revalidatePath("/"); // Revalidates all pages, good for dynamic content
    // Consider more specific revalidation if needed, e.g., revalidatePath(`/${newSite.id}`)
    return {
      success: true,
      message: "Project created successfully!",
      newSiteId: newSite.id,
    };
  } catch (error) {
    console.error("Error creating project:", error);
    return {
      success: false,
      message: "Failed to create project. Please try again.",
    };
  }
}

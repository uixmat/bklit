"use server";

import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth/next";
import { z } from "zod";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { getPlanDetails, PlanType } from "@/lib/plans";
import { addProjectSchema } from "@/lib/schemas/project-schema";
import type { ProjectFormState } from "@/types/user";

export type FormState = ProjectFormState;

// ============================================================================
// CREATE PROJECT ACTION
// ============================================================================

export async function createProjectAction(
  _prevState: FormState,
  formData: FormData,
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
      message += " You have reached the maximum limit for your plan.";
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

    revalidatePath("/");
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

// ============================================================================
// DELETE PROJECT ACTION
// ============================================================================

export async function deleteProjectAction(
  _prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const session = await getServerSession(authOptions);

  if (!session || !session.user || !session.user.id) {
    return {
      success: false,
      message: "User not authenticated.",
    };
  }

  const siteId = formData.get("siteId") as string;
  const confirmedProjectName = formData.get("confirmedProjectName") as string;

  if (!siteId || !confirmedProjectName) {
    return {
      success: false,
      message: "Missing site ID or project name for confirmation.",
    };
  }

  try {
    const project = await prisma.site.findUnique({
      where: {
        id: siteId,
        userId: session.user.id, // Ensure the user owns this project
      },
    });

    if (!project) {
      return {
        success: false,
        message:
          "Project not found or you do not have permission to delete it.",
      };
    }

    if (project.name !== confirmedProjectName) {
      return {
        success: false,
        message: "The entered project name does not match. Deletion cancelled.",
      };
    }

    await prisma.site.delete({
      where: {
        id: siteId,
      },
    });

    revalidatePath("/");

    return {
      success: true,
      message: `Project "${project.name}" deleted successfully.`,
    };
  } catch (error) {
    console.error("Error deleting project:", error);
    return {
      success: false,
      message: "Failed to delete project. Please try again.",
    };
  }
}

// ============================================================================
// GET USER PROJECTS WITH PAGINATION
// ============================================================================

const getUserProjectsSchema = z.object({
  userId: z.string(),
  limit: z.number().min(1).max(100).default(20),
  offset: z.number().min(0).default(0),
  cursor: z.string().optional(),
});

export async function getUserProjects(
  params: z.infer<typeof getUserProjectsSchema>,
) {
  const validation = getUserProjectsSchema.safeParse(params);

  if (!validation.success) {
    throw new Error(validation.error.message);
  }

  const { userId, limit, offset, cursor } = validation.data;

  try {
    // Cursor-based pagination for better performance
    const whereClause = cursor
      ? {
          userId,
          createdAt: { lt: new Date(cursor) },
        }
      : { userId };

    const [projects, totalCount] = await Promise.all([
      prisma.site.findMany({
        where: whereClause,
        include: {
          _count: {
            select: {
              pageViewEvents: true,
              trackedEvents: true,
              trackedSessions: true,
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
        take: limit,
      }),
      prisma.site.count({
        where: { userId },
      }),
    ]);

    return {
      data: projects,
      pagination: {
        total: totalCount,
        limit,
        offset,
        hasMore: projects.length === limit,
        nextCursor:
          projects.length > 0
            ? projects[projects.length - 1].createdAt.toISOString()
            : null,
      },
    };
  } catch (error) {
    console.error("Error getting user projects:", error);
    throw error;
  }
}

// ============================================================================
// GET TEAM PROJECTS WITH PAGINATION
// ============================================================================

const getTeamProjectsSchema = z.object({
  teamId: z.string(),
  limit: z.number().min(1).max(100).default(20),
  offset: z.number().min(0).default(0),
  cursor: z.string().optional(),
});

export async function getTeamProjects(
  params: z.infer<typeof getTeamProjectsSchema>,
) {
  const validation = getTeamProjectsSchema.safeParse(params);

  if (!validation.success) {
    throw new Error(validation.error.message);
  }

  const { teamId, limit, offset, cursor } = validation.data;

  try {
    // Cursor-based pagination for better performance
    const whereClause = cursor
      ? {
          teamId,
          createdAt: { lt: new Date(cursor) },
        }
      : { teamId };

    const [projects, totalCount] = await Promise.all([
      prisma.site.findMany({
        where: whereClause,
        include: {
          _count: {
            select: {
              pageViewEvents: true,
              trackedEvents: true,
              trackedSessions: true,
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
        take: limit,
      }),
      prisma.site.count({
        where: { teamId },
      }),
    ]);

    return {
      data: projects,
      pagination: {
        total: totalCount,
        limit,
        offset,
        hasMore: projects.length === limit,
        nextCursor:
          projects.length > 0
            ? projects[projects.length - 1].createdAt.toISOString()
            : null,
      },
    };
  } catch (error) {
    console.error("Error getting team projects:", error);
    throw error;
  }
}

// ============================================================================
// GET PROJECT STATISTICS WITH AGGREGATION
// ============================================================================

export async function getProjectStatistics(siteId: string) {
  try {
    const [pageViewStats, eventStats, sessionStats, projectInfo] =
      await Promise.all([
        // Get page view statistics
        prisma.pageViewEvent.aggregate({
          where: { siteId },
          _count: { id: true },
        }),
        // Get event statistics
        prisma.trackedEvent.aggregate({
          where: { siteId },
          _count: { id: true },
        }),
        // Get session statistics
        prisma.trackedSession.aggregate({
          where: { siteId },
          _count: { id: true },
          _avg: { duration: true },
        }),
        // Get project information
        prisma.site.findUnique({
          where: { id: siteId },
          select: {
            id: true,
            name: true,
            domain: true,
            createdAt: true,
            updatedAt: true,
            userId: true,
            teamId: true,
          },
        }),
      ]);

    return {
      project: projectInfo,
      pageViewStats,
      eventStats,
      sessionStats,
    };
  } catch (error) {
    console.error("Error getting project statistics:", error);
    throw error;
  }
}

// ============================================================================
// UPDATE PROJECT ACTION
// ============================================================================

const updateProjectSchema = z.object({
  siteId: z.string(),
  name: z.string().min(1).max(100),
  domain: z.string().url().optional().or(z.literal("")),
});

export async function updateProjectAction(
  _prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const session = await getServerSession(authOptions);

  if (!session || !session.user || !session.user.id) {
    return {
      success: false,
      message: "User not authenticated.",
    };
  }

  const rawFormData = Object.fromEntries(formData.entries());
  const validatedFields = updateProjectSchema.safeParse(rawFormData);

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Validation failed.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const { siteId, name, domain } = validatedFields.data;

    // Check if user owns the project
    const project = await prisma.site.findUnique({
      where: {
        id: siteId,
        userId: session.user.id,
      },
    });

    if (!project) {
      return {
        success: false,
        message:
          "Project not found or you do not have permission to update it.",
      };
    }

    // Update the project
    await prisma.site.update({
      where: { id: siteId },
      data: {
        name,
        domain: domain || null,
        updatedAt: new Date(),
      },
    });

    revalidatePath("/");

    return {
      success: true,
      message: "Project updated successfully!",
    };
  } catch (error) {
    console.error("Error updating project:", error);
    return {
      success: false,
      message: "Failed to update project. Please try again.",
    };
  }
}

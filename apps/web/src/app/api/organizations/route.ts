import { prisma } from "@bklit/db";
import { NextResponse } from "next/server";
import { authenticated } from "@/lib/auth";

export async function GET() {
  try {
    const session = await authenticated({ redirect: false });

    if (!session?.user?.id) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const organizations = await prisma.organization.findMany({
      where: {
        members: {
          some: {
            userId: session.user.id,
          },
        },
      },
      include: {
        members: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
                email: true,
                image: true,
              },
            },
          },
        },
        sites: {
          select: {
            id: true,
            name: true,
            domain: true,
            createdAt: true,
            updatedAt: true,
          },
        },
        _count: {
          select: {
            projects: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    // Transform the data to match the expected format
    const transformedOrganizations = organizations.map((organization) => ({
      id: organization.id,
      name: organization.name,
      slug: organization.slug,
      description: organization.description,
      plan: organization.plan,
      role:
        organization.members.find((member) => member.userId === session.user.id)
          ?.role || "member",
      siteCount: organization._count.sites,
      sites: organization.sites,
    }));

    return NextResponse.json(transformedOrganizations);
  } catch (error) {
    console.error("Error fetching organizations:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

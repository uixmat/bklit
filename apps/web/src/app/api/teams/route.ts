import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { prisma } from "@bklit/db";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const teams = await prisma.team.findMany({
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
            sites: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    // Transform the data to match the expected format
    const transformedTeams = teams.map((team) => ({
      id: team.id,
      name: team.name,
      slug: team.slug,
      description: team.description,
      plan: team.plan,
      role:
        team.members.find((member) => member.userId === session.user.id)
          ?.role || "member",
      siteCount: team._count.sites,
      sites: team.sites,
    }));

    return NextResponse.json(transformedTeams);
  } catch (error) {
    console.error("Error fetching teams:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

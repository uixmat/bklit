import { prisma } from "../../db";

export const getUserOrganizations = (userId: string) => {
  return prisma.organization.findMany({
    where: {
      members: {
        some: {
          userId,
        },
      },
    },
    include: {
      projects: true,
    },
  });
};

export type UserOrganizations = Awaited<
  ReturnType<typeof getUserOrganizations>
>;

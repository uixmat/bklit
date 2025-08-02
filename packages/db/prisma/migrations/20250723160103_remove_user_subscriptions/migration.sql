/*
  Warnings:

  - You are about to drop the column `userId` on the `Subscription` table. All the data in the column will be lost.
  - You are about to drop the column `plan` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `polarSubscriptionId` on the `User` table. All the data in the column will be lost.
  - Made the column `teamId` on table `Subscription` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Subscription" DROP CONSTRAINT "Subscription_teamId_fkey";

-- DropForeignKey
ALTER TABLE "Subscription" DROP CONSTRAINT "Subscription_userId_fkey";

-- DropIndex
DROP INDEX "Subscription_userId_idx";

-- DropIndex
DROP INDEX "User_polarSubscriptionId_key";

-- AlterTable
ALTER TABLE "Subscription" DROP COLUMN "userId",
ALTER COLUMN "teamId" SET NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "plan",
DROP COLUMN "polarSubscriptionId";

-- AddForeignKey
ALTER TABLE "Subscription" ADD CONSTRAINT "Subscription_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE CASCADE ON UPDATE CASCADE;

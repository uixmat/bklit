/*
  Warnings:

  - You are about to drop the column `siteId` on the `EventDefinition` table. All the data in the column will be lost.
  - You are about to drop the column `siteId` on the `PageViewEvent` table. All the data in the column will be lost.
  - You are about to drop the column `siteId` on the `TrackedEvent` table. All the data in the column will be lost.
  - You are about to drop the column `siteId` on the `TrackedSession` table. All the data in the column will be lost.
  - You are about to drop the `Site` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[projectId,trackingId]` on the table `EventDefinition` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `projectId` to the `EventDefinition` table without a default value. This is not possible if the table is not empty.
  - Added the required column `projectId` to the `PageViewEvent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `projectId` to the `TrackedEvent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `projectId` to the `TrackedSession` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "EventDefinition" DROP CONSTRAINT "EventDefinition_siteId_fkey";

-- DropForeignKey
ALTER TABLE "PageViewEvent" DROP CONSTRAINT "PageViewEvent_siteId_fkey";

-- DropForeignKey
ALTER TABLE "Site" DROP CONSTRAINT "Site_organizationId_fkey";

-- DropForeignKey
ALTER TABLE "TrackedEvent" DROP CONSTRAINT "TrackedEvent_siteId_fkey";

-- DropForeignKey
ALTER TABLE "TrackedSession" DROP CONSTRAINT "TrackedSession_siteId_fkey";

-- DropIndex
DROP INDEX "EventDefinition_siteId_idx";

-- DropIndex
DROP INDEX "EventDefinition_siteId_trackingId_key";

-- DropIndex
DROP INDEX "PageViewEvent_siteId_timestamp_idx";

-- DropIndex
DROP INDEX "TrackedEvent_siteId_createdAt_idx";

-- DropIndex
DROP INDEX "TrackedEvent_siteId_timestamp_idx";

-- DropIndex
DROP INDEX "TrackedSession_siteId_didBounce_idx";

-- DropIndex
DROP INDEX "TrackedSession_siteId_startedAt_idx";

-- AlterTable
ALTER TABLE "EventDefinition" DROP COLUMN "siteId",
ADD COLUMN     "projectId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "PageViewEvent" DROP COLUMN "siteId",
ADD COLUMN     "projectId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "TrackedEvent" DROP COLUMN "siteId",
ADD COLUMN     "projectId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "TrackedSession" DROP COLUMN "siteId",
ADD COLUMN     "projectId" TEXT NOT NULL;

-- DropTable
DROP TABLE "Site";

-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "domain" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "organizationId" TEXT,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Project_domain_key" ON "Project"("domain");

-- CreateIndex
CREATE INDEX "Project_organizationId_idx" ON "Project"("organizationId");

-- CreateIndex
CREATE INDEX "EventDefinition_projectId_idx" ON "EventDefinition"("projectId");

-- CreateIndex
CREATE UNIQUE INDEX "EventDefinition_projectId_trackingId_key" ON "EventDefinition"("projectId", "trackingId");

-- CreateIndex
CREATE INDEX "PageViewEvent_projectId_timestamp_idx" ON "PageViewEvent"("projectId", "timestamp");

-- CreateIndex
CREATE INDEX "TrackedEvent_projectId_timestamp_idx" ON "TrackedEvent"("projectId", "timestamp");

-- CreateIndex
CREATE INDEX "TrackedEvent_projectId_createdAt_idx" ON "TrackedEvent"("projectId", "createdAt");

-- CreateIndex
CREATE INDEX "TrackedSession_projectId_startedAt_idx" ON "TrackedSession"("projectId", "startedAt");

-- CreateIndex
CREATE INDEX "TrackedSession_projectId_didBounce_idx" ON "TrackedSession"("projectId", "didBounce");

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "organization"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PageViewEvent" ADD CONSTRAINT "PageViewEvent_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventDefinition" ADD CONSTRAINT "EventDefinition_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrackedEvent" ADD CONSTRAINT "TrackedEvent_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrackedSession" ADD CONSTRAINT "TrackedSession_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

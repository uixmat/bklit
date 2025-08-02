-- AlterTable
ALTER TABLE "PageViewEvent" ADD COLUMN     "city" TEXT,
ADD COLUMN     "country" TEXT,
ADD COLUMN     "countryCode" TEXT,
ADD COLUMN     "ip" TEXT,
ADD COLUMN     "isp" TEXT,
ADD COLUMN     "lat" DOUBLE PRECISION,
ADD COLUMN     "lon" DOUBLE PRECISION,
ADD COLUMN     "mobile" BOOLEAN,
ADD COLUMN     "region" TEXT,
ADD COLUMN     "regionName" TEXT,
ADD COLUMN     "timezone" TEXT,
ADD COLUMN     "zip" TEXT;

-- CreateIndex
CREATE INDEX "PageViewEvent_country_idx" ON "PageViewEvent"("country");

-- CreateIndex
CREATE INDEX "PageViewEvent_city_idx" ON "PageViewEvent"("city");

-- DropForeignKey
ALTER TABLE "ads" DROP CONSTRAINT "ads_ad_status_id_fkey";

-- AlterTable
ALTER TABLE "ads" ALTER COLUMN "ad_status_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "ads" ADD CONSTRAINT "ads_ad_status_id_fkey" FOREIGN KEY ("ad_status_id") REFERENCES "ad_status"("id") ON DELETE SET NULL ON UPDATE CASCADE;

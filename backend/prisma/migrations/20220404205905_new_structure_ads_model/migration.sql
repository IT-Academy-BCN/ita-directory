-- DropForeignKey
ALTER TABLE "ads" DROP CONSTRAINT "ads_ad_status_id_fkey";

-- AddForeignKey
ALTER TABLE "ads" ADD CONSTRAINT "ads_ad_status_id_fkey" FOREIGN KEY ("ad_status_id") REFERENCES "ad_status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

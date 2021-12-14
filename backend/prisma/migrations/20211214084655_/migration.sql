-- DropForeignKey
ALTER TABLE "ads" DROP CONSTRAINT "ads_ad_type_id_fkey";

-- DropForeignKey
ALTER TABLE "level" DROP CONSTRAINT "level_level_type_id_fkey";

-- AddForeignKey
ALTER TABLE "ads" ADD CONSTRAINT "ads_ad_type_id_fkey" FOREIGN KEY ("ad_type_id") REFERENCES "ad_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "level" ADD CONSTRAINT "level_level_type_id_fkey" FOREIGN KEY ("level_type_id") REFERENCES "level_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

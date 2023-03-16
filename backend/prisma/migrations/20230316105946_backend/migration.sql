-- AlterTable
ALTER TABLE "media" ADD COLUMN     "adId" INTEGER;

-- AddForeignKey
ALTER TABLE "media" ADD CONSTRAINT "media_adId_fkey" FOREIGN KEY ("adId") REFERENCES "ads"("id") ON DELETE SET NULL ON UPDATE CASCADE;

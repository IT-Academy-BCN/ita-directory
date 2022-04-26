/*
  Warnings:

  - Added the required column `name` to the `ad_status` table without a default value. This is not possible if the table is not empty.
  - Added the required column `un_publish` to the `ad_status` table without a default value. This is not possible if the table is not empty.
  - Made the column `publish` on table `ad_status` required. This step will fail if there are existing NULL values in that column.
  - Made the column `ad_status_id` on table `ads` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "ads" DROP CONSTRAINT "ads_ad_status_id_fkey";

-- AlterTable
ALTER TABLE "ad_status" ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "un_publish" INTEGER NOT NULL,
ALTER COLUMN "publish" SET NOT NULL;

-- AlterTable
ALTER TABLE "ads" ALTER COLUMN "ad_status_id" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "ads" ADD CONSTRAINT "ads_ad_status_id_fkey" FOREIGN KEY ("ad_status_id") REFERENCES "ad_status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

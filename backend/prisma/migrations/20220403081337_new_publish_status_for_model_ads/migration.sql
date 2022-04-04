/*
  Warnings:

  - You are about to drop the column `publish` on the `ads` table. All the data in the column will be lost.
  - Added the required column `ad_status_id` to the `ads` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ads" DROP COLUMN "publish",
ADD COLUMN     "ad_status_id" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "ad_status" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "publish" BOOLEAN NOT NULL DEFAULT true,
    "un_publish" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "ad_status_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ads" ADD CONSTRAINT "ads_ad_status_id_fkey" FOREIGN KEY ("ad_status_id") REFERENCES "ad_status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

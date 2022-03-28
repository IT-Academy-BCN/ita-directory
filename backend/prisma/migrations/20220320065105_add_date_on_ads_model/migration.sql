/*
  Warnings:

  - You are about to drop the column `neighbourhood` on the `level_type` table. All the data in the column will be lost.
  - Added the required column `updateAt` to the `ads` table without a default value. This is not possible if the table is not empty.
  - Added the required column `neighborhood` to the `level_type` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ads" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "publish" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "updateAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "level_type" DROP COLUMN "neighbourhood",
ADD COLUMN     "neighborhood" INTEGER NOT NULL;

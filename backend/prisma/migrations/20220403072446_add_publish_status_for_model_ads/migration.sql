/*
  Warnings:

  - You are about to drop the column `createdAt` on the `ads` table. All the data in the column will be lost.
  - You are about to drop the column `updateAt` on the `ads` table. All the data in the column will be lost.
  - Added the required column `updated_at` to the `ads` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ads" DROP COLUMN "createdAt",
DROP COLUMN "updateAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

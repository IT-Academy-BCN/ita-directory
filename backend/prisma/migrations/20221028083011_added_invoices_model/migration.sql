-- CreateEnum
CREATE TYPE "Status" AS ENUM ('PAID', 'PENDING', 'CANCELLED');

-- CreateTable
CREATE TABLE "invoice" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "billing_address" TEXT,
    "postal_code" TEXT,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "vat_id" TEXT NOT NULL,
    "vat_amount" INTEGER NOT NULL,
    "second_tax" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "invoice_number" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT E'PENDING',

    CONSTRAINT "invoice_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "invoice_invoice_number_key" ON "invoice"("invoice_number");

-- AddForeignKey
ALTER TABLE "invoice" ADD CONSTRAINT "invoice_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

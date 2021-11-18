-- CreateTable
CREATE TABLE "type" (
    "id" SERIAL NOT NULL,
    "type_name_id" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "type_name" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "type" ADD FOREIGN KEY ("type_name_id") REFERENCES "type_name"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- CreateTable
CREATE TABLE "level" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "parent_id" INTEGER,
    "level_type_id" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "level_type" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "country" INTEGER NOT NULL,
    "state" INTEGER NOT NULL,
    "city" INTEGER NOT NULL,
    "town" INTEGER NOT NULL,
    "district" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "level" ADD FOREIGN KEY ("parent_id") REFERENCES "level"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "level" ADD FOREIGN KEY ("level_type_id") REFERENCES "level_type"("id") ON DELETE CASCADE ON UPDATE CASCADE;

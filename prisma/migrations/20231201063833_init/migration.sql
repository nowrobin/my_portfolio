/*
  Warnings:

  - You are about to drop the `Adjetive` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Adjetive";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Adjective" (
    "adj" TEXT NOT NULL PRIMARY KEY
);

/*
  Warnings:

  - You are about to drop the column `adj` on the `Nickname` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "Adjective" (
    "adj" TEXT NOT NULL PRIMARY KEY
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Nickname" (
    "nickname" TEXT NOT NULL PRIMARY KEY
);
INSERT INTO "new_Nickname" ("nickname") SELECT "nickname" FROM "Nickname";
DROP TABLE "Nickname";
ALTER TABLE "new_Nickname" RENAME TO "Nickname";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

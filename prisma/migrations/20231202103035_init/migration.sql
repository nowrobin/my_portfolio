/*
  Warnings:

  - You are about to drop the `Adjective` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Adjective";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Nickname" (
    "adj" TEXT NOT NULL DEFAULT '',
    "nickname" TEXT NOT NULL PRIMARY KEY
);
INSERT INTO "new_Nickname" ("nickname") SELECT "nickname" FROM "Nickname";
DROP TABLE "Nickname";
ALTER TABLE "new_Nickname" RENAME TO "Nickname";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

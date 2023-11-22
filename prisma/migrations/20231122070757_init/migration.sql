-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Question" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "checked" BOOLEAN DEFAULT false,
    "answer" TEXT
);
INSERT INTO "new_Question" ("answer", "checked", "id", "question", "username") SELECT "answer", "checked", "id", "question", "username" FROM "Question";
DROP TABLE "Question";
ALTER TABLE "new_Question" RENAME TO "Question";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

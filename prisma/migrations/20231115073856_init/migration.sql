-- CreateTable
CREATE TABLE "Question" (
    "id" INTEGER NOT NULL,
    "username" TEXT NOT NULL,
    "question" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Question_id_key" ON "Question"("id");

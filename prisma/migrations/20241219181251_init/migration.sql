-- CreateTable
CREATE TABLE "Participant" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "bibNumber" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Participant_bibNumber_key" ON "Participant"("bibNumber");

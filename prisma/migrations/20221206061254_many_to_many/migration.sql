/*
  Warnings:

  - You are about to drop the column `eventID` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_eventID_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "eventID";

-- CreateTable
CREATE TABLE "_UserToEvent" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_UserToEvent_AB_unique" ON "_UserToEvent"("A", "B");

-- CreateIndex
CREATE INDEX "_UserToEvent_B_index" ON "_UserToEvent"("B");

-- AddForeignKey
ALTER TABLE "_UserToEvent" ADD CONSTRAINT "_UserToEvent_A_fkey" FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserToEvent" ADD CONSTRAINT "_UserToEvent_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

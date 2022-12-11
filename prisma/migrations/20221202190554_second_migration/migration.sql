/*
  Warnings:

  - You are about to drop the column `registeredUsers` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `eventName` on the `User` table. All the data in the column will be lost.
  - Added the required column `eventID` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Event" DROP COLUMN "registeredUsers";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "eventName",
ADD COLUMN     "eventID" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_eventID_fkey" FOREIGN KEY ("eventID") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

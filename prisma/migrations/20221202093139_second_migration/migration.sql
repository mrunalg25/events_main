/*
  Warnings:

  - The `registeredUsers` column on the `Event` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `eventID` on the `User` table. All the data in the column will be lost.
  - Made the column `eventName` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Event" DROP COLUMN "registeredUsers",
ADD COLUMN     "registeredUsers" TEXT[];

-- AlterTable
ALTER TABLE "User" DROP COLUMN "eventID",
ALTER COLUMN "eventName" SET NOT NULL;

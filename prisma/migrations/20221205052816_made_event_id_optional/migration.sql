-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_eventID_fkey";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "eventID" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_eventID_fkey" FOREIGN KEY ("eventID") REFERENCES "Event"("id") ON DELETE SET NULL ON UPDATE CASCADE;

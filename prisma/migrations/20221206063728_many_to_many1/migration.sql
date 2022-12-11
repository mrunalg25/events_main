/*
  Warnings:

  - You are about to drop the `_UserToEvent` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_UserToEvent" DROP CONSTRAINT "_UserToEvent_A_fkey";

-- DropForeignKey
ALTER TABLE "_UserToEvent" DROP CONSTRAINT "_UserToEvent_B_fkey";

-- DropTable
DROP TABLE "_UserToEvent";

-- CreateTable
CREATE TABLE "EventUser" (
    "id" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "EventUser_pkey" PRIMARY KEY ("eventId","userId")
);

-- AddForeignKey
ALTER TABLE "EventUser" ADD CONSTRAINT "EventUser_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventUser" ADD CONSTRAINT "EventUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

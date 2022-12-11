import { PrismaClient } from '@prisma/client'
import bodyParser from "body-parser";
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";

const app = express();

// Express configuration
app.set("port", process.env.PORT || 6480);
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());


const prisma = new PrismaClient()



export const addEvent= async(req: Request, res: Response)=>{
    await prisma.event.create({
        data: req.body //give eventName
            
        })
    
    console.log("Event created");
    const allEvents= await prisma.event.findMany({
      include:{
        registeredUsers: true

      }
    })
    console.dir(allEvents, { depth: null })
    return res.json(allEvents);
}


export const getAllEvents= async(req:Request, res: Response)=>{
  const allEvents= await prisma.event.findMany({
    include:{
      registeredUsers: true

    }
  })
  console.dir(allEvents, { depth: null })
  return res.json(allEvents);

}


export const deleteEvent= async(req:Request, res: Response)=>{
    await prisma.event.delete({
        where: {
            id: req.params.id
        }
    });
    console.log("Deleted event");
}

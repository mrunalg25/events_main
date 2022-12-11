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


export const registerUser= async(req: Request, res: Response)=>{
    const createdUser= await prisma.user.create({
        data: req.body//email, password, name, teacherID
         
          
      });
      console.log("User created");
      console.log(createdUser);

};

export const getAllUsers= async(req: Request, res: Response)=>{
  const allUsers= await prisma.user.findMany({
    include:{
      selectedEvents: {
        include:{
          event: true
        }
      },
      teacher: true
    }
  })
  const result= allUsers.map(user=>{
    return{...user, selectedEvents: user.selectedEvents.map(event => event.event)}
  })
  
  
  console.dir(result, {depth:null});
  return res.json(result);
};


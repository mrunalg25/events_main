import { PrismaClient } from '@prisma/client'
import bodyParser from "body-parser";
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import { Router } from "express";
import userRoutes from "./routes/userRoute";
import eventRoutes from "./routes/eventRoute";

const app = express();
const router = Router();

// Express configuration
app.set("port", process.env.PORT || 6480);
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(cors());


const prisma = new PrismaClient()

async function main() {
  // Connect the client
  await prisma.$connect()

  app.use("/user", userRoutes);
  app.use("/event", eventRoutes);
  


// //POST REQ TO ADD EVENT
//   app.post("/addEvent", async(req: Request, res: Response)=>{
//     await prisma.event.create({
//         data:{
//             eventName: "Dancing",
//             }
//         })
    
//     console.log("Event created");
//     const allEvents= await prisma.event.findMany({
//       include:{
//         registeredUsers: true

//       }
//     })
//     console.dir(allEvents, { depth: null })
//     return res.json(allEvents);

//   });
// //POST REQ TO REG USER
//   app.post("/register", async(req: Request, res: Response)=>{
//     const createdUser= await prisma.user.create({
//       data: {
//         email:"manoj@gmail.com",
//         password:"123456789",
//         name: "Manoj",
//         teacherId: "clbbx33xt0001u43g12dq1cff"
//       }
        
//     });
//     console.log("User created");
//     const allUsers= await prisma.user.findMany({
//       include:{
//         selectedEvents: {
//           include:{
//             event: true
//           }
//         },
//         teacher: true
//       }
//     })
//     const result= allUsers.map(user=>{
//       return{...user, selectedEvents: user.selectedEvents.map(event => event.event)}
//     })
    
    
//     console.dir(result, {depth:null});
//     return res.json(result);
//   });

//   //RELATIONS TABLE
//   app.post("/relation", async(req: Request, res: Response)=>{
//     await prisma.eventUser.create({
//       data:{
//         eventId: "clb65zd960000u4a4f3e118ni",
//         userId: "clbaqka9n0001u468mu10m80j"
//       }
//     })
//     console.log("Relation created");
//     const allRelations= await prisma.eventUser.findMany()

//     console.dir(allRelations, {depth:null});
//     return res.json(allRelations);
//   })

//   //DELETE REQ TO DELETE EVENT
//   app.delete("/deleteEvent", async(req:Request, res: Response)=>{
//     await prisma.event.delete({
//         where: {
//             id: "clb6weujy0000u4t42fuiug1q"
//         }
//     });
//     console.log("Deleted event");
//   });

}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

  // start server
try {
    const port = app.get("port");
    app.listen(port, () => {
      console.log(`App running on ${port}.`);
    });
  }
catch (err) {
  throw err;
}
export default app;
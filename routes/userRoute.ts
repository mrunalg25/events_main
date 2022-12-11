import express, { NextFunction, Request, Response } from "express";
import {getAllUsers, registerUser} from "../controllers/userController";


const router= express.Router();

router.route("/registerUser").post(registerUser);

router.route("/getAllUsers").get(getAllUsers);


export default router;
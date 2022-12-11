import express, { NextFunction, Request, Response } from "express";
import {addEvent, deleteEvent, getAllEvents } from "../controllers/eventController";

const router= express.Router();

router.route("/addEvent").post(addEvent);

router.route("/getAllEvents").get(getAllEvents);

router.route("/deleteEvent/:id").delete(deleteEvent);

export default router;
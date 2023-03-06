import { Router } from "express";
// import { createScheduleController } from "../controllers/schedules.controller";

export const schedulesRoutes: Router = Router();
 
// schedulesRoutes.post("/", createScheduleController);
schedulesRoutes.get("/realEstate/:id");

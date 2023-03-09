import { Router } from "express";
import { createScheduleController, listSchedulesController } from "../controllers/schedules.controller";
import { ensureTokenIsValidMiddleware } from "../middlewares/ensureTokenIsValid.middleware";
import { ensureUserDataIsValid } from "../middlewares/ensureUserDataIsValid.middleware";
import { createSchedulesSchema } from "../schemas/schedules.schemas";

export const schedulesRoutes: Router = Router();

schedulesRoutes.post("/", ensureTokenIsValidMiddleware, ensureUserDataIsValid(createSchedulesSchema), createScheduleController);
schedulesRoutes.get("/realEstate/:id", ensureTokenIsValidMiddleware, listSchedulesController);

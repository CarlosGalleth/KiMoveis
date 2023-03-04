import { Router } from "express";
import { createLoginController } from "../controllers/login.controller";
import { ensureUserDataIsValid } from "../middlewares/ensureUserDataIsValid.middleware";
import { createLoginSchema } from "../schemas/login.schemas";

export const loginRoutes: Router = Router();

loginRoutes.post("/", ensureUserDataIsValid(createLoginSchema), createLoginController);

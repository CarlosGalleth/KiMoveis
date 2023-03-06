import { Router } from "express";
import { createRealEstateController, listRealEstateController } from "../controllers/realEstate.controller";
import { ensureTokenIsValidMiddleware } from "../middlewares/ensureTokenIsValid.middleware";
import { ensureUserDataIsValid } from "../middlewares/ensureUserDataIsValid.middleware";
import { createRealEstateSchema } from "../schemas/realEstate.schemas";

export const realEstateRoutes: Router = Router();

realEstateRoutes.post("/", ensureUserDataIsValid(createRealEstateSchema), ensureTokenIsValidMiddleware, createRealEstateController);
realEstateRoutes.get("/", listRealEstateController);

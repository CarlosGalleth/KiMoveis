import { Router } from "express";
import { createCategoryController, listCategoriesController, listRealEstateFromCategoryController } from "../controllers/categories.controller";
import { ensureCategoryNameRepeats } from "../middlewares/ensureCategoryNameRepeats.middleware";
import { ensureTokenIsValidMiddleware } from "../middlewares/ensureTokenIsValid.middleware";

export const categoriesRoutes: Router = Router();

categoriesRoutes.post("/", ensureTokenIsValidMiddleware, ensureCategoryNameRepeats, createCategoryController);
categoriesRoutes.get("/", listCategoriesController)
categoriesRoutes.get("/:id/realEstate", listRealEstateFromCategoryController);

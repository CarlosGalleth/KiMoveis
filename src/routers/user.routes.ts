import { Router } from "express";
import { createUserController, deleteUserController, listUsersController, updateUserController } from "../controllers/users.controller";
import { ensureEmailExistsMiddleware } from "../middlewares/ensureEmailExists.middleware";
import { ensureTokenIsValidMiddleware } from "../middlewares/ensureTokenIsValid.middleware";
import { ensureUserDataIsValid } from "../middlewares/ensureUserDataIsValid.middleware";
import { ensureUserExistsMiddleware } from "../middlewares/ensureUserExists.middleware";
import { createUsersSchema, updateUserSchema } from "../schemas/users.schemas";

export const userRoutes: Router = Router();

userRoutes.post("/", ensureUserDataIsValid(createUsersSchema), ensureEmailExistsMiddleware, createUserController);
userRoutes.get("/" , ensureTokenIsValidMiddleware, listUsersController);
userRoutes.patch("/:id", ensureTokenIsValidMiddleware, ensureUserExistsMiddleware, ensureUserDataIsValid(updateUserSchema), updateUserController);
userRoutes.delete("/:id", ensureTokenIsValidMiddleware, ensureUserExistsMiddleware, deleteUserController); 

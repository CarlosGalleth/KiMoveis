import { z } from "zod";
import {
  createUsersSchema,
  createUsersSchemaReturn,
  usersList,
} from "../schemas/users.schemas";

export type IUser = z.infer<typeof createUsersSchema>;
export type IUserReturn = z.infer<typeof createUsersSchemaReturn>;
export type IUsers = z.infer<typeof usersList>
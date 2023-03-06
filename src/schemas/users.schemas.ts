import { z } from "zod";

export const createUsersSchema = z.object({
  name: z.string().max(45),
  email: z.string().email().max(45),
  password: z.string().min(4).max(120),
  admin: z.boolean().optional().default(false),
});

export const createUsersSchemaReturn = createUsersSchema
  .extend({
    id: z.number(),
    createdAt: z.string(),
    updatedAt: z.string(),
    deletedAt: z.string().nullable(),
  })
  .omit({ password: true });

export const usersList = createUsersSchemaReturn.array();

export const updateUserSchema = createUsersSchema
  .partial()
  .omit({ admin: true });

import { hashSync } from "bcryptjs";
import { z } from "zod";

export const createUsersSchema = z.object({
  name: z.string().max(45),
  email: z.string().email().max(45),
  password: z
    .string()
    .min(4)
    .max(120)
    .transform((password) => {
      return hashSync(password, 10);
    }),
  admin: z.boolean().optional().default(false),
});

export const createUsersSchemaReturn = createUsersSchema
  .extend({
    id: z.number(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().nullable(),
  })
  .omit({ password: true });

export const usersList = createUsersSchemaReturn.array();

export const updateUserSchema = createUsersSchema.partial().omit({ admin: true });

import { hashSync } from "bcryptjs";
import { z } from "zod";


export const createUsersSchema = z.object({
    name: z.string().max(45),
    email: z.string().email().max(45),
    password: z.string().max(120).transform((password) => {
        return hashSync(password, 10)
    }),
    admin: z.boolean().optional()
})

export const createUsersSchemaReturn = createUsersSchema.extend({
    id: z.number(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date()
}).omit({password: true})
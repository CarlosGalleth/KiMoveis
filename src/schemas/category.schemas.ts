import { z } from "zod";

export const createCategorySchema = z.object({
  name: z.string(),
});

export const createCategorySchemaReturn = createCategorySchema.extend({
  id: z.number(),
});

export const categoryList = createCategorySchemaReturn.array()
import { z } from "zod";
import { addressSchema, addressSchemaReturn } from "./address.schemas";
import { createCategorySchemaReturn } from "./category.schemas";

export const createRealEstateSchema = z.object({
  value: z.union([z.number(), z.string()]),
  size: z.number().int().min(1, "Number must be greater than 0"),
  address: addressSchema,
  categoryId: z.number(),
});

export const createRealEstateSchemaReturn = createRealEstateSchema
  .extend({
    id: z.number(),
    createdAt: z.string(),
    updatedAt: z.string(),
    sold: z.boolean().default(false),
    address: addressSchemaReturn,
    category: createCategorySchemaReturn,
  })
  .omit({
    categoryId: true,
  });

export const listRealEstate = createRealEstateSchemaReturn
  .omit({ category: true })
  .array();

  export const realEstateFromCategory = z.object({
    id: z.number(),
    name: z.string(),
    realEstate: listRealEstate
  })
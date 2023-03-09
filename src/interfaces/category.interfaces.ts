import { z } from "zod";
import { categoryList, createCategorySchema, createCategorySchemaReturn } from "../schemas/category.schemas";
import { realEstateFromCategory } from "../schemas/realEstate.schemas";

export type ICategory = z.infer<typeof createCategorySchema>
export type ICategoryReturn = z.infer<typeof createCategorySchemaReturn>
export type ICategoryList = z.infer<typeof categoryList>
export type IRealEstateFromCategory = z.infer<typeof realEstateFromCategory>
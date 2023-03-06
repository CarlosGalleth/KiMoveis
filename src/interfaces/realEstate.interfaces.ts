import { z } from "zod";
import { createRealEstateSchema, createRealEstateSchemaReturn, listRealEstate } from "../schemas/realEstate.schemas";

export type IRealEstate = z.infer<typeof createRealEstateSchema>
export type IRealEstateReturn = z.infer<typeof createRealEstateSchemaReturn>
export type IRealEstateList = z.infer<typeof listRealEstate>
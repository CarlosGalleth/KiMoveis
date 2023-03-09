import { z } from "zod";
import { createUsersSchemaReturn } from "./users.schemas";
import { createRealEstateSchemaReturn } from "./realEstate.schemas";

export const createSchedulesSchema = z.object({
  date: z.string(),
  hour: z.string(),
  realEstateId: z.number(),
});

export const createSchedulesSchemaReturn = createSchedulesSchema.extend({
  id: z.number(),
  userId: z.number(),
});

export const schedulesList = z.object({
  date: z.string(),
  hour: z.string(),
  realEstate: createRealEstateSchemaReturn,
  user: createUsersSchemaReturn,
});

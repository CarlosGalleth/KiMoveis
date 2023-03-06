import { z } from "zod";

export const createSchedulesSchema = z.object({
  date: z.string(),
  hour: z.string(),
  propertieId: z.number(),
});

export const createSchedulesSchemaReturn = createSchedulesSchema.extend({
  id: z.number(),
  userId: z.number(),
});

export const schedulesList = createSchedulesSchemaReturn.array();

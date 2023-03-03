import { z } from "zod";

export const createSchedulesSchema = z.object({
  date: z.date(),
  hour: z.preprocess((date) => {
    if (typeof date == "string" || date instanceof Date) {
      const newDate = new Date(date);
      const hour = newDate.getHours();
      const minute = newDate.getMinutes();
      const hourReturn = String(hour) + String(minute);
      return hourReturn;
    }
  }, z.date().or(z.string())),
  propertieId: z.number(),
});

export const createSchedulesSchemaReturn = createSchedulesSchema.extend({
  userId: z.number(),
});

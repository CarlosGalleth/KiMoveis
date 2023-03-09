import { z } from "zod";
import { createSchedulesSchema, createSchedulesSchemaReturn, schedulesList } from "../schemas/schedules.schemas";

export type ISchedule = z.infer<typeof createSchedulesSchema>
export type IScheduleReturn = z.infer<typeof createSchedulesSchemaReturn>
export type ISchedulesList = z.infer<typeof schedulesList>
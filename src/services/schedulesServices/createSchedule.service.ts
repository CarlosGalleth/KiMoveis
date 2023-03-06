import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Schedule, User } from "../../entities";
import {
  ISchedule,
  IScheduleReturn,
} from "../../interfaces/schedules.interfaces";
import { createSchedulesSchemaReturn } from "../../schemas/schedules.schemas";

// export const createScheduleService = async (scheduleData: ISchedule): Promise<IScheduleReturn> => {
//     const scheduleRepository: Repository<Schedule> = AppDataSource.getRepository(Schedule)

//     const schedule: Schedule = scheduleRepository.create({
//         ...scheduleData,
//         userId: scheduleData.propertieId
//     });

//     await scheduleRepository.save(schedule);

//     const newSchedule = createSchedulesSchemaReturn.parse(schedule);

//     return newSchedule;
// };

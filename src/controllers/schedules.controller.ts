import { Request, Response } from "express";
import { ISchedule, ISchedulesList } from "../interfaces/schedules.interfaces";
import { createScheduleService } from "../services/schedulesServices/createSchedule.service";
import { listSchedulesService } from "../services/schedulesServices/listSchedules.service";

export const createScheduleController = async ( request: Request, response: Response): Promise<Response> => {
  const scheduleData: ISchedule = request.body;
  const userId: number = Number(request.userSub)
 
  await createScheduleService(scheduleData, userId)
 
  return response.status(201).json({
    message: "Schedule created"
  });
};


export const listSchedulesController = async (request: Request, response: Response): Promise<Response> => {

  console.log(request.baseUrl)
  const realEstateId: number = Number(request.params.id)

  const schedulesList = await listSchedulesService(realEstateId)

  return response.json(schedulesList)
}
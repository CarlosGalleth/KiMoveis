import { Request, Response } from "express";
import { IRealEstate, IRealEstateList, IRealEstateReturn } from "../interfaces/realEstate.interfaces";
import { createRealEstateService } from "../services/realEstateServices/createRealEstate.service";
import { listRealEstateService } from "../services/realEstateServices/listRealEstate.service";

export const createRealEstateController = async (request: Request, response: Response): Promise<Response> => {

    const realEstateData: IRealEstate = request.body
 
    const newRealEstate: IRealEstateReturn = await createRealEstateService(realEstateData)

    return response.status(201).json(newRealEstate)
}

export const listRealEstateController = async (request: Request, response: Response): Promise<Response> => {

    const realEstateList: IRealEstateList = await listRealEstateService()

    return response.json(realEstateList)
}
 
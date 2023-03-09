
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";
import { IRealEstateList } from "../../interfaces/realEstate.interfaces";
import { listRealEstate } from "../../schemas/realEstate.schemas";

export const listRealEstateService = async (): Promise<IRealEstateList> => {

    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)

    const realEstateList = await realEstateRepository.find({
        relations: {
            address: true,
            category: true
        }
    })

    const realEstateListParsed: IRealEstateList = listRealEstate.parse(realEstateList)

    return realEstateListParsed
}
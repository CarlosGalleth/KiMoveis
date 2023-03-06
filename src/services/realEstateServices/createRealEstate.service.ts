import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Address, Category, RealEstate } from "../../entities";
import { AppError } from "../../errors";
import { IRealEstate, IRealEstateReturn } from "../../interfaces/realEstate.interfaces";
import { createRealEstateSchemaReturn } from "../../schemas/realEstate.schemas";

export const createRealEstateService = async (realEstateData: IRealEstate): Promise<IRealEstateReturn> => {

    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)
    const addressRepository: Repository<Address> = AppDataSource.getRepository(Address)
    const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category)

    const address: Address = addressRepository.create(realEstateData.address)

    const foundedAddress = await addressRepository.findOneBy({
        number: String(address.number)
    })

    if (foundedAddress) {
        throw new AppError("Address already exists", 409)
    }

    await addressRepository.save(address)

    const foundedCategory: Category | null = await categoryRepository.findOneBy({
        id: realEstateData.categoryId
    })

    if (!foundedCategory) {
        throw new AppError("Category not found", 404)
    }


    const realEstate: RealEstate = realEstateRepository.create({
        ...realEstateData,
        address: address,
        category: foundedCategory
    })

    await realEstateRepository.save(realEstate)

    const newRealEstate: IRealEstateReturn = createRealEstateSchemaReturn.parse(realEstate)

    return newRealEstate 
}
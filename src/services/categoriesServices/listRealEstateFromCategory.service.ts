import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category, RealEstate } from "../../entities";
import { AppError } from "../../errors";
import { IRealEstateFromCategory } from "../../interfaces/category.interfaces";
import { createCategorySchemaReturn } from "../../schemas/category.schemas";

export const listRealEstateFromCategoryService = async (categoryId: number): Promise<IRealEstateFromCategory> => {

    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)
    const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category)

    const foundedCategory = await categoryRepository.findOneBy({
        id: categoryId
    })
    if (!foundedCategory) {
        throw new AppError("Category not found", 404)
    }

    const parsedCategory = createCategorySchemaReturn.parse(foundedCategory)
    
    const realEstate = await realEstateRepository.find({
         where: {
            category: parsedCategory
         }
    })

    const realEstateFromCategory: IRealEstateFromCategory = {
        ...parsedCategory,
        realEstate
    }

    return realEstateFromCategory
}

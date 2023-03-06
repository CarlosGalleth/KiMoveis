import { Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { ICategoryList } from "../../interfaces/category.interfaces";

export const listCategoriesService = async (): Promise<ICategoryList> => {
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const categoryList: ICategoryList = await categoryRepository.find();

  return categoryList;
};

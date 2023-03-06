import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Category } from "../entities";
import { AppError } from "../errors";
import { ICategory } from "../interfaces/category.interfaces";

export const ensureCategoryNameRepeats = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const categoryData: ICategory = request.body;

  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const foundedCategory = await categoryRepository.findOneBy({
    name: categoryData.name,
  });

  if (foundedCategory) {
    throw new AppError("Category already exists", 409);
  }

  return next();
};

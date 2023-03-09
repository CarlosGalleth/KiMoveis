import { Request, Response } from "express";
import { ICategory, ICategoryList, IRealEstateFromCategory } from "../interfaces/category.interfaces";
import { createCategoryService } from "../services/categoriesServices/createCategory.service";
import { listCategoriesService } from "../services/categoriesServices/listCategories.service";
import { listRealEstateFromCategoryService } from "../services/categoriesServices/listRealEstateFromCategory.service";

export const createCategoryController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const categoryData: ICategory = request.body;

  const newCategory = await createCategoryService(categoryData);

  return response.status(201).json(newCategory);
};

export const listCategoriesController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const categoryList: ICategoryList = await listCategoriesService();

  return response.json(categoryList);
};

export const listRealEstateFromCategoryController = async (request: Request, response: Response): Promise<Response> => {

  const categoryId: number = Number(request.params.id)

  const realEstateList: IRealEstateFromCategory = await listRealEstateFromCategoryService(categoryId)

  return response.json(realEstateList)
} 
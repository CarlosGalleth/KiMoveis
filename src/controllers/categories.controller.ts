import { Request, Response } from "express";
import { ICategory, ICategoryList } from "../interfaces/category.interfaces";
import { createCategoryService } from "../services/categoriesServices/createCategory.service";
import { listCategoriesService } from "../services/categoriesServices/listCategories.service";

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

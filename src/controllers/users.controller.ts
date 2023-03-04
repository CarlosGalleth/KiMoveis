import { Request, Response } from "express";
import { IUser, IUsers } from "../interfaces/users.interfaces";
import { createUserService } from "../services/createUser.service";
import { deleteUserService } from "../services/deleteUser.service";
import { listUsersService } from "../services/listUsers.service";
import { updateUserService } from "../services/updateUser.service";

export const createUserController = async (request: Request, response: Response): Promise<Response> => {
  const userData: IUser = request.body;

  const newUser = await createUserService(userData);

  return response.status(201).json(newUser);
};

export const listUsersController = async (request: Request, response: Response): Promise<Response> => {

    const users: IUsers = await listUsersService()

    return response.json(users)
}

export const updateUserController = async (request: Request, response: Response): Promise<Response> => {

    const userData: IUser = request.body
    const userId: number = Number(request.params.id)

    const newUser = await updateUserService(userData, userId)

    return response.json(newUser)
}

export const deleteUserController = async (request: Request, response: Response) => {

    await deleteUserService(Number(request.params.id))

    return response.status(204).send()
}
import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { AppError } from "../errors";

export const ensureUserExistsMiddleware = async (request: Request, response: Response, next: NextFunction) => {
    
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const userId: number = Number(request.params.id)

    const findUser = await userRepository.findOneBy({
        id: userId
    })

    if(!findUser) {
        throw new AppError("User not found", 404)
    }

    return next()
}
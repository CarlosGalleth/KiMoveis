import { Repository } from "typeorm";
import { IUser, IUserReturn } from "../interfaces/users.interfaces";
import { User } from "../entities/user.entity";
import { AppDataSource } from "../data-source";
import { createUsersSchemaReturn } from "../schemas/users.schemas";

export const createUserService = async (userData: IUser): Promise<IUserReturn> => {

  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User = userRepository.create(userData)

  await userRepository.save(user)
  
  const newUser = createUsersSchemaReturn.parse(user)
  
  return newUser
};

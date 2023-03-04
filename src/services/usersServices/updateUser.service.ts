import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { IUser, IUserReturn } from "../../interfaces/users.interfaces";
import { createUsersSchemaReturn } from "../../schemas/users.schemas";

export const updateUserService = async (
  userData: IUser,
  userId: number
): Promise<IUserReturn> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const oldUserData = await userRepository.findOneBy({
    id: userId,
  });

  const user = userRepository.create({
    ...oldUserData,
    ...userData,
  });

  await userRepository.save(user);

  const updatedUser = createUsersSchemaReturn.parse(user);

  return updatedUser;
};

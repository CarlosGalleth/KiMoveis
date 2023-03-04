import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { IUsers } from "../../interfaces/users.interfaces";
import { usersList } from "../../schemas/users.schemas";

export const listUsersService = async (): Promise<IUsers> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const findUsers: Array<User> = await userRepository.find({
    order: {
      id: "ASC",
    },
  });

  const users = usersList.parse(findUsers);

  return users;
};

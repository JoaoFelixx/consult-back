import { Users } from "../../../entity";
import { User } from "../../../interfaces";
import { AppDataSource } from '../../../data-source';

export async function createUser(userReq: User): Promise<Error | Users> {
  const userRepository = AppDataSource.getRepository(Users);

  const user = Object.assign(new Users(), userReq);

  const hasEmailRegistered = await userRepository.findOne({ where: { email: user.email } })

  if (hasEmailRegistered)
    return new Error('Email already registered');

  const result = await userRepository.save(user)

  return result;
}
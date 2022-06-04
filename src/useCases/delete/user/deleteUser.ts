import { AppDataSource } from '../../../data-source';
import { Users } from '../../../entity';

export async function deleteUser(id: string): Promise<void | Error> {
  const userRepo = AppDataSource.getRepository(Users);

  const userToRemove = await userRepo.findOneBy({ id });

  if (!userToRemove)
    return new Error('User does not registered');

  await userRepo.remove(userToRemove);
}
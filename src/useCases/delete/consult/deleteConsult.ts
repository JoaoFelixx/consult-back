import { Users } from '../../../entity';
import { AppDataSource } from '../../../data-source';

export async function deleteConsult(id: string): Promise<Error | void> {
  const consultRepo = AppDataSource.getRepository(Users);

  const consultToRemove = await consultRepo.findOneBy({ id });

  if (!consultToRemove)
    return new Error('Consult does not exists');

  await consultRepo.remove(consultToRemove);
}
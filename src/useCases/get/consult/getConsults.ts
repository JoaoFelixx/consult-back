import { AppDataSource } from "../../../data-source";
import { Consults } from "../../../entity";

export async function getConsults(): Promise<Consults[]> {
  const consultRepo = AppDataSource.getRepository(Consults);

  const consults = await consultRepo.find({
    relations: ['patients'],
  });

  return consults;
}
import { AppDataSource } from "../../../data-source";
import { Consults } from "../../../entity";
import { Consult } from "../../../interfaces";

export async function updateConsult(consultReq: Consult): Promise<Error | Consult> {
  const consultRepo = AppDataSource.getRepository(Consults);

  const consultRegistered = await consultRepo.findOneBy({ id: consultReq.id });

  if (!consultRegistered)
    return new Error('Consult does not registered');

  const consultUpdated = {
    ...consultRegistered,
    ...consultReq
  }

  const consult = await consultRepo.save(consultUpdated);

  return consult;
}
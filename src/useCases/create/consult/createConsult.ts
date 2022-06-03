import { AppDataSource } from '../../../data-source';
import { Consults } from "../../../entity";
import { Consult } from "../../../interfaces";

export async function createConsult(consultReq: Consult): Promise<Consults> {
  const consultRepo = AppDataSource.getRepository(Consults);

  const consult = Object.assign(new Consults(), consultReq);

  const result = await consultRepo.save(consult);

  return result;
}
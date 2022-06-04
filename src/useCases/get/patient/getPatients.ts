import { AppDataSource } from "../../../data-source";
import { Patients } from "../../../entity";

export async function getPatients(): Promise<Patients[]> {
  const patientsRepo = AppDataSource.getRepository(Patients);

  const patients = await patientsRepo.find();

  return patients;
}
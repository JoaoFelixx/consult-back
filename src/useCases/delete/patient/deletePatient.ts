import { AppDataSource } from "../../../data-source";
import { Patients } from "../../../entity";

export async function deletePatient(id: string): Promise<Error | void> {
  const patientRepo = AppDataSource.getRepository(Patients);

  const patientToRemove = await patientRepo.findOneBy({ id });

  if (!patientToRemove)
    return new Error('Patient does not registered');

  await patientRepo.remove(patientToRemove);
}
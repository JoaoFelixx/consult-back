import { AppDataSource } from '../../../data-source';
import { Patients } from "../../../entity";
import { Patient } from "../../../interfaces";

export async function createPatient(patientReq: Patient): Promise<Patients> {
  const patientRepo = AppDataSource.getRepository(Patients);

  const patient = Object.assign(new Patients(), patientReq);

  const result = await patientRepo.save(patient);

  return result;
}
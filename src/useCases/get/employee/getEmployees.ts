import { AppDataSource } from "../../../data-source";
import { Employees } from "../../../entity";

export async function getEmployees(): Promise<Employees[]> {
  const employeeRepo = AppDataSource.getRepository(Employees);

  const employees = await employeeRepo.find();

  return employees;
}
import { AppDataSource } from '../../../data-source';
import { Employees } from "../../../entity";
import { Employee } from "../../../interfaces";

export async function createEmployee(employeeReq: Employee): Promise<Employees> {
  const employeeRepo = AppDataSource.getRepository(Employees);

  const employee = Object.assign(new Employees(), employeeReq);

  const result = await employeeRepo.save(employee);

  return result;
}
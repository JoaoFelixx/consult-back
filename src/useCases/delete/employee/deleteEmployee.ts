import { AppDataSource } from "../../../data-source";
import { Employees } from "../../../entity";

export async function deleteEmployee(id: string): Promise<Error | void> {
  const employeeRepo = AppDataSource.getRepository(Employees);

  const employeeToRemove = await employeeRepo.findOneBy({ id });

  if (!employeeToRemove)
    return new Error('Employee does not registered');

  await employeeRepo.remove(employeeToRemove);
}
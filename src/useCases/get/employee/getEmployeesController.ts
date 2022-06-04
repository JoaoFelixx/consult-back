import { Request, Response } from "express";
import { getEmployees } from './getEmployees';

export async function getEmployeesController(request: Request, response: Response) {
  try {
    const employees = await getEmployees();

    return response.json(employees);
  } catch (error) {
    console.error(error);
    response.sendStatus(400);
  }
}
import { randomUUID as uuid } from 'crypto';
import { Request, Response } from 'express';
import { Employee } from '../../../interfaces';
import { createEmployee } from './createEmployee';
import bcrypt from 'bcryptjs';

export async function createEmployeeController(request: Request, response: Response) {
  try {
    const { name, password } = request.body as Omit<Employee, 'id'>;

    if (!name || !password)
      return response.status(400).json('Invalid request');

    const employee: Employee = {
      id: uuid(),
      name,
      password: await bcrypt.hash(password, 8)
    }

    const result = await createEmployee(employee);

    return response.status(201).json({ name: result.name });

  } catch (error) {
    response.sendStatus(400);
  }
}
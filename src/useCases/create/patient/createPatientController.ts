import { randomUUID as uuid } from 'crypto';
import { Request, Response } from 'express';
import { Patient } from '../../../interfaces';
import { createPatient } from './createPatient';

export async function createPatientController(request: Request, response: Response) {
  try {
    const { name, phone_number } = request.body as Omit<Patient, 'id'>;

    if (name.length < 4)
      return response.status(400).json('name is invalid');

    if (phone_number.length < 7)
      return response.status(400).json('phone number is invalid');

    const patient: Patient = {
      id: uuid(),
      name,
      phone_number
    }

    const result = await createPatient(patient);

    return response.status(201).json(result);

  } catch (error) {
    response.sendStatus(409);
  }
}
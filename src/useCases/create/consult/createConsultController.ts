import { randomUUID as uuid } from 'crypto';
import { Request, Response } from 'express';
import { Consult } from '../../../interfaces';
import { createConsult } from './createConsult';

export async function createConsultController(request: Request, response: Response) {
  try {
    const { createdAt, patient_id } = request.body as Omit<Consult, 'id'>;

    if (!patient_id)
      return response.status(400).json('ID is missing');

    if (new Date(createdAt) instanceof Date) {
      const consult: Consult = {
        id: uuid(),
        createdAt,
        patient_id
      }

      const result = await createConsult(consult);

      return response.status(201).json(result);

    }

    return response.status(400).json('Date is invalid');

  } catch (error) {
    console.log(error.message)
    response.sendStatus(409);
  }
}
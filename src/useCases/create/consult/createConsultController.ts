import { randomUUID as uuid } from 'crypto';
import { Request, Response } from 'express';
import { Consult } from '../../../interfaces';
import { createConsult } from './createConsult';

export async function createConsultController(request: Request, response: Response) {
  try {
    const { consultDate, patient_id } = request.body as Omit<Consult, 'id'>;

    if (!patient_id)
      return response.status(400).json('ID is missing');

    const isValidDate = (new Date(consultDate) instanceof Date);

    if (!isValidDate)
      return response.status(400).json('Date is invalid');

    const consultIsPossible = (new Date(consultDate).getTime() > new Date().getTime());
    const isServiceHour = (new Date(consultDate).getHours() > 8 || new Date(consultDate).getHours() < 17)

    if (!consultIsPossible || !isServiceHour)
      return response.status(400).json('Consult date is invalid');

    const consult: Consult = {
      id: uuid(),
      patient_id,
      consultDate,
    }

    const result = await createConsult(consult);

    return response.status(201).json(result);

  } catch (error) {
    response.sendStatus(400);
  }
}
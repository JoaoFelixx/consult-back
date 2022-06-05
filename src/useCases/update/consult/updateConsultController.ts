import { Request, Response } from "express";
import { Consult} from "../../../interfaces";
import { updateConsult } from "./updateConsult";

export async function updateConsultController(request: Request, response: Response) {
  try {
    request.body.id = request.params.id;

    const { id, consultDate, patient_id } = request.body as Consult;

    const propertyNames = Object.getOwnPropertyNames({ id, consultDate, patient_id });
    const amountInvalid = propertyNames
      .map(property => (!!request.body[property]) ? null : `${property} is missing`)
      .filter(item => !!item)

    if (amountInvalid.length !== 0)
      return response.status(400).json(amountInvalid.join(', '));

    const result = await updateConsult(request.body);

    if (result instanceof Error)
      return response.status(400).json(result.message);

    return response.status(202).json(result);

  } catch (error) {
    response.sendStatus(400);
  }
}
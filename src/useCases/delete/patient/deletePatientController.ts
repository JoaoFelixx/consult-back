import { Request, Response } from "express";
import { deletePatient } from "./deletePatient";

export async function deletePatientController(request: Request, response: Response) {
  try {
    const { id } = request.params as { id: string };

    const result = await deletePatient(id);
    
    if (result instanceof Error)
      return response.status(400).json(result.message);

    return response.sendStatus(204);

  } catch (error) {
    console.error(error);
    response.sendStatus(400);
  }
}
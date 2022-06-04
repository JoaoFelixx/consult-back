import { Request, Response } from "express";
import { deleteConsult } from './deleteConsult';

export async function deleteConsultController(request: Request, response: Response) {
  try {
    const { id } = request.params as { id: string };

    const result = await deleteConsult(id);

    if (result instanceof Error)
      return response.status(400).json(result.message);

    return response.sendStatus(204);

  } catch (error) {
    console.log(error.message);
    response.sendStatus(400);
  }
}
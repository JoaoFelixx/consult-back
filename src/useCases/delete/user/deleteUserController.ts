import { Response, Request } from 'express';
import { deleteUser } from './deleteUser';

export async function deleteUserController(request: Request, response: Response) {
  try {
    const { id } = request.params as { id: string };

    const result = await deleteUser(id);

    if (result instanceof Error)
      return response.status(400).json(result.message);

    return response.sendStatus(204);

  } catch (error) {
    console.log(error);
    response.sendStatus(400);
  }
}
import { Request, Response } from "express";
import { getConsults } from "./getConsults";

export async function getConsultsController(request: Request, response: Response) {
  try {
    const consults = await getConsults();

    return response.json(consults);

  } catch (error) {
    console.error(error);
    response.sendStatus(400);
  }
}
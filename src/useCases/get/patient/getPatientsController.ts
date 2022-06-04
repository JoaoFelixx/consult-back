import { Request, Response } from "express";
import { getPatients } from "./getPatients";

export async function getPatientsController(request: Request, response: Response) {
  try {
    const patients = await getPatients();

    return response.json(patients);
    
  } catch (error) {
    console.error(error);
    response.sendStatus(400)
  }
}
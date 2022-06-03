import { Request, Response } from 'express';
import { createUser } from './createUser';
import { randomUUID as uuid } from 'crypto';
import bcrypt from 'bcryptjs';
import { User } from '../../../interfaces';

export async function createUserController(request: Request, response: Response) {
  try {
    const regexEmail = new RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/);
    const { email, password } = request.body as Omit<User, 'id'>;

    if (!regexEmail.test(email))
      return response.status(400).json('Email is invalid');

    if (password.length < 4)
      return response.status(400).json('Password is invalid');

    const user: User = {
      id: uuid(),
      email: email.toLowerCase(),
      password: await bcrypt.hash(password, 8)
    }

    const result = await createUser(user)

    if (result instanceof Error)
      return response.status(400).json(result.message);

    return response.status(201).json({ id: result.id });

  } catch (error) {
    response.sendStatus(409);
  }
}
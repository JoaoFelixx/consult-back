import jwt from 'jsonwebtoken';
import { Response, Request, NextFunction } from 'express';

export function middlewareJwt(req: Request, res: Response, next: NextFunction) {
  try {
    const { authorization } = req.headers;

    if (!authorization)
      throw new Error();

    const token = authorization.replace('Bearer', '').trim();

    if (!jwt.verify(token, process.env.SECRET_KEY_JWT))
      throw new Error();

    next();

  } catch (error) {
    res.sendStatus(401)
  }
}
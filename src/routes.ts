import { Router } from 'express';
import {
  createUserController,
} from './useCases';
import { middlewareJwt } from './middleware';

const routes = Router();

routes.post('/users', createUserController);

routes.use(middlewareJwt);

export { routes }
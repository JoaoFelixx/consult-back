import { Router } from 'express';
import { middlewareJwt } from './middleware';
import {
  createUserController,
  createPatientController,
  createConsultController,
  createEmployeeController,
} from './useCases';

const routes = Router();

routes.post('/users', createUserController);
routes.post('/consults', createConsultController);
routes.post('/patients', createPatientController);
routes.post('/employees', createEmployeeController);

routes.use(middlewareJwt);

export { routes }
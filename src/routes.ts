import { Router } from 'express';
import { middlewareJwt } from './middleware';
import {
  createUserController,
  deleteUserController,
  getConsultsController,
  getPatientsController,
  getEmployeesController,
  deletePatientController,
  deleteConsultController,
  createPatientController,
  createConsultController,
  updateConsultController,
  deleteEmployeeController,
  createEmployeeController,
} from './useCases';

const routes = Router();

routes.get('/consults', getConsultsController);
routes.get('/patients', getPatientsController);
routes.get('/employees', getEmployeesController);

routes.post('/users', createUserController);
routes.post('/consults', createConsultController);
routes.post('/patients', createPatientController);

routes.delete('/users/:id', deleteUserController);
routes.delete('/consults/:', deleteConsultController);
routes.delete('/patients/:id', deletePatientController);

routes.put('/consults/:id', updateConsultController);

routes.use(middlewareJwt);

routes.post('/employees', createEmployeeController);
routes.delete('/employees/:id', deleteEmployeeController);

export { routes }
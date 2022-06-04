import {
  createUserController,
  createPatientController,
  createConsultController,
  createEmployeeController,
} from './create';
import {
  deleteUserController,
  deletePatientController,
  deleteConsultController,
  deleteEmployeeController,
} from './delete';
import {
  getConsultsController,
  getPatientsController,
  getEmployeesController,
} from './get';
import { updateConsultController } from './update';

export {
  createUserController,
  deleteUserController,
  getConsultsController,
  getPatientsController,
  getEmployeesController,
  updateConsultController,
  deletePatientController,
  deleteConsultController,
  createPatientController,
  createConsultController,
  deleteEmployeeController,
  createEmployeeController,
};
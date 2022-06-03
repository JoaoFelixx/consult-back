interface User {
  id: string;
  email: string;
  password: string;
}

interface Patient {
  id: string;
  name: string;
  phone_number: string;
}

interface Consult {
  id: string;
  patient_id: string;
  createdAt: Date;
}

interface Employee {
  id: string;
  name: string;
  password: string;
}

export type { User, Patient, Consult, Employee };
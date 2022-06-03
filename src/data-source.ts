import { DataSource } from "typeorm"
import { Users, Consults, Employees, Patients } from "./entity"

export const AppDataSource = new DataSource({
    type: "postgres",
    url: process.env.DATABASE_URL,
    entities: [Users, Consults, Employees, Patients],
    synchronize: true,
    logging: false,
})
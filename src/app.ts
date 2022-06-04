import "reflect-metadata";
import "dotenv/config";
import cors from 'cors';
import express from 'express';
import { routes } from './routes';
import { AppDataSource } from "./data-source";

const application = express();

application.use(cors());
application.use(express.json());
application.use('/api', routes);

AppDataSource.initialize()

export { application };
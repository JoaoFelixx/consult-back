import "reflect-metadata";
import "dotenv/config";
import { AppDataSource } from "./data-source";
import cors from 'cors';
import express from 'express';
import { routes } from './routes';

const application = express();

application.use(cors());
application.use(express.json());
application.use('/api', routes);

AppDataSource.initialize()

export { application };
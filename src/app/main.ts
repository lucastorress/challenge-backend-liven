import express from 'express';
import { router } from './routes';
// import 'reflect-metadata';
// import database from '../database/connections/PostgreSQL';

import 'dotenv/config';

const app = express();

app.use(express.json());
app.use(router);

// establish database connection
// database
//   .initialize()
//   .then(() => {
//     console.log('[database] Data Source has been initialized!');
//   })
//   .catch((err) => {
//     console.error('[database] Error during Data Source initialization:', err);
//   });

export { app };

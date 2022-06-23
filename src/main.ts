import * as express from 'express';
import router from './routes';
import database from './database/PostgreSQLConnection';
import * as dotenv from 'dotenv';

dotenv.config();

// establish database connection
database
  .initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err);
  });

const app = express();

app.use(express.json());
app.use(router);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`[server]: Server started at https://localhost:${port}`);
});

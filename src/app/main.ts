import * as express from 'express';
import Router from './routes';
import 'reflect-metadata';
import database from '../database/connections/PostgreSQL';

class Main {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.app.use(express.json());
  }

  private routes(): void {
    const router = Router.getInstance();
    router.createRoutes();
    this.app.use(router.getRoutes);
  }
}

// establish database connection
database
  .initialize()
  .then(() => {
    console.log('[database] Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('[database] Error during Data Source initialization:', err);
  });

const bootstrap = new Main();
export default bootstrap;

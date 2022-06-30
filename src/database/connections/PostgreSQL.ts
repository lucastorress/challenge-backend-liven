import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
dotenv.config();

class SingletonConnection {
  private static _instance: DataSource;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  public static getInstance(): DataSource {
    if (!this._instance) {
      this._instance = new DataSource({
        type: 'postgres',
        host: process.env.TYPEORM_HOST,
        port: +process.env.TYPEORM_PORT,
        username: process.env.TYPEORM_USERNAME,
        password: process.env.TYPEORM_PASSWORD,
        database: process.env.TYPEORM_DATABASE,
        synchronize: false,
        logging: false,
        entities: ['src/entity/*.ts'],
        migrations: ['src/database/migrations/*.ts'],
        subscribers: [],
      });
    }
    return this._instance;
  }
}

export default SingletonConnection.getInstance();

import { DataSource } from 'typeorm';
import { Ingredient } from './entity/Ingredient';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'mypass',
  database: 'cooking',
  synchronize: true,
  logging: true,
  entities: [Ingredient],
  subscribers: [],
  migrations: [],
});

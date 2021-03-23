import { DataSource } from 'apollo-datasource';
import { getRepository } from 'typeorm';
import { City } from '@postgres/entity/city';
import { ICity } from './types';

export class PostgresDB extends DataSource {
  constructor() {
    super();
  }

  async getCities(): Promise<ICity[]> {
    return await getRepository(City).find();
  }
}

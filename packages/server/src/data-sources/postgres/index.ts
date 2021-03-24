import { DataSource } from 'apollo-datasource';
import { getRepository } from 'typeorm';
import { City } from '@postgres/entity/city';
import { Category } from '@postgres/entity/category';
import { ICategory, ICity } from './types';

export class PostgresDB extends DataSource {
  constructor() {
    super();
  }

  async getCities(): Promise<ICity[]> {
    return await getRepository(City).find();
  }

  async getCategories(): Promise<ICategory[]> {
    return await getRepository(Category).find({ relations: ['subcategories'] });
  }
}

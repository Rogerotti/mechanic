import { DataSource } from 'apollo-datasource';
import { getRepository } from 'typeorm';
import { City } from '@postgres/entity/city';
import { Category } from '@postgres/entity/category';
import { Trainer } from '@postgres/entity/trainer';
import { ICategory, ICity, ITrainer } from './types';

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

  async getTrainers(): Promise<ITrainer[]> {
    const trainers = await getRepository(Trainer).find({ relations: ['subcategories', 'comments'] });
    return trainers.map((trainer) => {
      const comments = trainer.comments;

      const totalRates = comments.length ?? 1;
      let rates = 0.0;

      comments.forEach((comment) => {
        rates += comment.rating;
      });

      return {
        ...trainer,
        rating: rates / totalRates,
        totalRates: totalRates,
      };
    });
  }
}

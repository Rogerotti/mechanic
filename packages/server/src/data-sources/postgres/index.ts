import { DataSource } from 'apollo-datasource';
import { getRepository } from 'typeorm';
import { City } from '@postgres/entity/city';
import { Category } from '@postgres/entity/category';
import { Trainer } from '@postgres/entity/trainer';
import { ICategory, ICity, ILocation, ITrainer } from './types';

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
    const trainers = await getRepository(Trainer).find({
      relations: ['subcategories', 'comments', 'locations', 'locations.city'],
    });
    return trainers.map((trainer) => {
      const comments = trainer.comments;

      const locations: ILocation[] = trainer.locations?.map((location) => {
        return {
          id: location.id,
          name: location.name,
          city: {
            id: location.city?.id,
            name: location.city?.name,
          },
          streetName: location.streetName,
          streetNumber: location.streetNumber,
        };
      });

      const totalRates = comments.length && comments.length > 0 ? comments.length : 1;
      let rates = 0.0;

      comments?.forEach((comment) => {
        rates += comment.rating;
      });

      return {
        ...trainer,
        locations,
        rating: rates / totalRates,
        totalRates: comments.length,
      };
    });
  }
}

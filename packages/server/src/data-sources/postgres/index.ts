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

  mapTrainer(trainer: Trainer): ITrainer {
    const comments = trainer.comments.map((comment) => {
      return {
        id: comment.id,
        date: comment.date,
        description: comment.description,
        rating: comment.rating,
        userImage: comment.user.image,
        userFirstName: comment.user.firstName,
        userLastName: comment.user.lastName,
      };
    });

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
      comments,
      locations,
      rating: rates / totalRates,
      totalRates: comments.length,
    };
  }

  async getCities(): Promise<ICity[]> {
    return await getRepository(City).find();
  }

  async getCategories(): Promise<ICategory[]> {
    return await getRepository(Category).find({ relations: ['subcategories'] });
  }

  async getTrainers(): Promise<ITrainer[]> {
    const trainers = await getRepository(Trainer).find({
      relations: ['subcategories', 'comments', 'comments.user', 'locations', 'locations.city'],
    });

    return trainers.map((trainer) => {
      return this.mapTrainer(trainer);
    });
  }

  async getTrainer(id: string): Promise<ITrainer> {
    const trainer = await getRepository(Trainer).findOne(id, {
      relations: ['subcategories', 'comments', 'comments.user', 'locations', 'locations.city'],
    });

    return this.mapTrainer(trainer);
  }
}

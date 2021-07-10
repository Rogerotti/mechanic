import { DataSource } from 'apollo-datasource';

export interface ICity {
  id: string;
  name: string;
}

export interface ICategory {
  id: number;
  name: string;
  description: string;
  subcategories: ISubcategory[];
}

export interface ISubcategory {
  id: number;
  name: string;
  description: string;
}

export interface IComment {
  id: number;
  description: string;
  rating: number;
  date: Date;
  trainerId: number;
  userId: number;
  userImage: string;
  userFirstName: string;
  userLastName: string;
}

export interface IEvent {
  id: number;
  trainerId: number;
  description: string;
  startDate: Date;
  endDate: Date;
}

export interface ILocation {
  id: number;
  name?: string;
  streetName: string;
  streetNumber: number;
  city: ICity;
}

export interface ITrainer {
  id: number;
  name: string;
  lastName: string;
  description: string;
  rating: number;
  totalRates: number;
  image: string;
  subcategories: ISubcategory[];
  locations: ILocation[];
}

export interface IPostgresDataSource extends DataSource {
  getCities(): Promise<ICity[]>;
  createCity(name: string): Promise<ICity>;
  deleteCity(id: string): Promise<boolean>;
  getCategories(): Promise<ICategory[]>;
  getTrainers(): Promise<ITrainer[]>;
  getTrainer(id: string): Promise<ITrainer>;
  getComments(): Promise<IComment[]>;
  getEvents(): Promise<IEvent[]>;
}

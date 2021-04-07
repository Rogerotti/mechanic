export interface ICity {
  id: number;
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
  userImage: string;
  userFirstName: string;
  userLastName: string;
}

export interface ILocation {
  id: number;
  name?: string;
  streetName: string;
  streetNumber: number;
  city: ICity;
}

// export interface IUser {

// }

export interface ITrainer {
  id: number;
  name: string;
  lastName: string;
  description: string;
  rating: number;
  totalRates: number;
  image: string;
  comments: IComment[];
  subcategories: ISubcategory[];
  locations: ILocation[];
}

export interface IPostgresDataSource {
  getCities(): ICity[];
  getCategories(): ICategory[];
  getTrainers(): ITrainer[];
  getTrainer(id: string): ITrainer;
}

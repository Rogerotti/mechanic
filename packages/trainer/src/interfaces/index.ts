export interface ICity {
  id: string;
  name: string;
}

export interface ICategory {
  id: string;
  name: string;
}

export interface ITrainerBasicDTO {
  id: string;
  name: string;
  lastName: string;
  description: string;
  image?: string;
  location: string;
  numberOfRatings: number;
  rating: number;
}

export interface ICity {
  id: string;
  name: string;
}

export interface ICategory {
  id: string;
  name: string;
}

export interface ILocation {
  position: IPosition;
  street: string;
}

export interface IPosition {
  x: number;
  y: number;
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

export interface IEventDTO {
  starDate: Date;
  endDate: Date;
  description: string;
}

export interface ITrainerExtendedDTO {
  id: string;
  name: string;
  lastName: string;
  description: string;
  image?: string;
  location: ILocation;
  creationDate: Date;
  contactDetails: {
    phoneNumber?: string;
    email?: string;
  };
  banner?: {
    header?: string;
    image?: string;
    subHeader?: string;
  };
}

export interface ICity {
  id: number;
  name: string;
}

export interface IPostgresDataSource {
  getCities(): ICity[];
}

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

export interface IPostgresDataSource {
  getCities(): ICity[];
  getCategories(): ICategory[];
}

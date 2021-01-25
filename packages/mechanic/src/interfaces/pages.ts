import { IBrand, IModel, ICity } from '.';

export interface IHomePageProps {
  brands: IBrand[];
  models: IModel[];
  cities: ICity[];
  onSearchRequest: (brandId: string, modelId: string, cityId: string) => void;
}

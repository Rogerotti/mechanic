import axios from 'axios';
import { IBrand, IModel } from '../../interfaces';

export const fetchAllCarBrands = async (): Promise<IBrand[]> => {
  const url = 'www.test.com'; // TODO
  return await axios
    .get<IBrand[]>(url)
    .then((res) => {
      return res.data;
    })
    .catch((exception) => {
      console.error('fetchAllCarBrands', exception);
      return [
        { id: 'bmw', name: 'BMW' },
        { id: 'sc', name: 'Skoda' },
      ];
    });
};

export const fetchAllCarModels = async (): Promise<IModel[]> => {
  const url = 'www.test.com'; // TODO
  return await axios
    .get<IModel[]>(url)
    .then((res) => {
      return res.data;
    })
    .catch((exception) => {
      console.error('fetchAllCarModels', exception);
      return [
        { id: 'e81', brandId: 'bmw', name: 'E-81' },
        { id: 'e87', brandId: 'bmw', name: 'E-87' },
        { id: 'oc', brandId: 'sc', name: 'Octavia' },
        { id: 'fab', brandId: 'sc', name: 'Fabia' },
      ];
    });
};

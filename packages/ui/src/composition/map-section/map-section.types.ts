import { IMapProps } from '@core-components/map/map.types';

export interface IMapSectionsProps {
  position: IMapProps['position'];
  zoom: IMapProps['zoom'];
  street: string;
  distance: string;
}

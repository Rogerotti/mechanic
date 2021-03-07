import { IIterable } from '../../types/core';

export interface IRatingCardProps extends IIterable {
  image: string;
  header: string;
  description: string;
  date: Date;
  rating: number;
}

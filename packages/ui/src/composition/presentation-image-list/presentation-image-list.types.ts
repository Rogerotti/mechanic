import { IIterable } from '../../types/core';

export interface IPresentationItem extends IIterable {
  title: string;
  bgcolor: string;
  image: string;
}

export interface IPresentationImageListProps {
  title: string;
  items: IPresentationItem[];
  onClick?: (id: string) => void;
}

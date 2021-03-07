export enum LinkEnum {
  Internal,
  External,
  Button,
}

export interface IIterable {
  id: string;
}

export interface ILink {
  text: string;
  url: string;
  linkType: LinkEnum;
  onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement | HTMLElement, MouseEvent>) => void;
}

export interface IListItem extends IIterable {
  value: string;
}

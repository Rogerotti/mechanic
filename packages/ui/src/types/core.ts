export enum LinkEnum {
  Internal,
  External,
  Button,
}

export interface ILink {
  text: string;
  url: string;
  linkType: LinkEnum;
  onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement | HTMLElement, MouseEvent>) => void;
}

export interface IListItem {
  id: string;
  value: string;
}

import { ILink } from '../../types/core';

export interface IHeaderProps {
  logo: string;
  username?: string;
  links: ILink[];
  rightMenuLinks: ILink[];
  onLogoClick?: (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => void;
}

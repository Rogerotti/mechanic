import { LinkProps } from '@material-ui/core/Link';
import { LinkEnum } from '../../types/core';

export interface ILinkProps extends Omit<LinkProps, 'href' | 'to'> {
  text: string;
  linkType: LinkEnum;
  url: string;
}

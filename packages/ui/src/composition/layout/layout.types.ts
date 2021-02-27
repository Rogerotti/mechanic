import { IHeaderProps } from '../../composition/header/header.types';
import { IFooterProps } from '../../composition/footer/footer.types';

export interface ILayout {
  headerLinks: IHeaderProps['links'];
  headerRightMenuLinks: IHeaderProps['rightMenuLinks'];
  headerLogo: IHeaderProps['logo'];
  headerUsername?: IHeaderProps['username'];
  onLogoClick?: IHeaderProps['onLogoClick'];
  footerLogo: IFooterProps['logo'];
}

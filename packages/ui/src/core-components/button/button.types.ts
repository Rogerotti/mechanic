import { ButtonProps } from '@material-ui/core/Button';

export interface IButtonProps extends ButtonProps {
  text: string;
  rounded?: boolean;
}

import { IconEnum } from '../../utils/icons/icons.types';

export interface IInputWithIconProps {
  className?: string;
  inputClassName?: string;
  icon: IconEnum;
  value?: string;
  placeholder: string;
  isPassword?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
}

import { IconEnum } from '../../utils/icons/icons.types';

export interface IInputWithIconProps {
  className?: string;
  inputClassName?: string;
  icon: IconEnum;
  placeholder: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
}

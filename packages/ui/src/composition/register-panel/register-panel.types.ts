export interface IRegisterPanelProps {
  email: string;
  password: string;

  onEmailChange?: (email: string) => void;
  onPasswordChange?: (username: string) => void;
  onRegisterClick?: () => void;

  registerLabel: string;
  registerPlaceholderLabel: string;
  passwordPlaceholderLabel: string;
}

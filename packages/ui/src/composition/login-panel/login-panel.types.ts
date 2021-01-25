export interface ILoginPanelProps {
  username: string;
  password: string;

  onUsernameChange?: (username: string) => void;
  onPasswordChange?: (username: string) => void;
  onSingupClick?: () => void;
  onLoginClick?: () => void;

  loginPlaceholderLabel?: string;
  passwordPlaceholderLabel?: string;
  signinLabel?: string;
  signupLabel?: string;
  loginLabel?: string;
  separatorLabel?: string;
}

import React from 'react';
import { Locale } from './index';

export interface ContextProps {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

export const LocaleContext = React.createContext<ContextProps>({
  locale: 'pl',
  setLocale: () => null,
});

import { useContext } from 'react';
import { LocaleContext } from './context';
import { translations, defaultlocale, Locale } from '../translations';

export default function useTranslation(): { getText: (key: string) => string; locale: Locale } {
  const { locale } = useContext(LocaleContext);

  const getText = (key: string): string => {
    if (!translations[locale][key]) {
      console.warn(`Translation '${key}' for locale '${locale}' not found.`);
    }
    return translations[locale][key] || translations[defaultlocale][key] || '';
  };

  return {
    getText,
    locale,
  };
}

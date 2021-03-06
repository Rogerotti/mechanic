export type Locale = 'pl' | 'en';

interface Translations {
  en: { [key: string]: string };
  pl: { [key: string]: string };
}

export const translations: Translations = {
  en: {},
  pl: {
    mainSearchHeader: 'Chcesz lepszych efektów?',
    mainSearchSubheader: 'Znajdź lepszego trenera!',
    howItWorksHeader: 'Jak to działa?',
    protege: 'Podopieczny',
    trainer: 'Trener',
    aboutUs: 'O nas',
    priceList: 'Cennik',
    login: 'Zaloguj',
    logout: 'Wyloguj',
    register: 'Zarejestruj',

    city: 'Miasto',
    search: 'Szukaj',
    mechanic: 'Mechanik',
    workshop: 'Warsztat',
    headerName: 'Najlepszy mechanik',
    pricing: 'Wycena',
    book: 'Zarezerwuj',
    specialization: 'Specjalizacja',
    showLess: 'Pokaż mniej',
    more: 'Wiecej',
  },
};

export const defaultlocale: Locale = 'pl';

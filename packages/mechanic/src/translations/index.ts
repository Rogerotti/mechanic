export type Locale = 'pl' | 'en';

interface Translations {
  en: { [key: string]: string };
  pl: { [key: string]: string };
}

export const translations: Translations = {
  en: {
    brand: 'Brand',
    brands: 'Brands',
    vehicleModel: 'Vehicle model',
    city: 'City',
    search: 'Search',
    mechanic: 'Mechanic',
    workshop: 'Workshop',
    headerName: 'Najlepszy mechanik',
    pricing: 'Pricing',
    book: 'Book',
    specialization: 'Specialization',
    showLess: 'Show less',
    more: 'More',
  },
  pl: {
    brand: 'Marka pojazdu',
    brands: 'Marki pojazdu',
    vehicleModel: 'Model pojazdu',
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

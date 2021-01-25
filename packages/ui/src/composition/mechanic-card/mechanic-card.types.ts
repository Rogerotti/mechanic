export interface IMechanicCardProps {
  className: string;
  id: string;
  image: string;
  name: string;
  lastName: string;
  location: string;
  generalBrands: any[];
  additionalBrands: any[];
  generalSpecialization: any[];
  additionalSpecialization: any[];
  onClick: (id: string) => void;
  description: string;
  bookText: string;
  specializationText: string;
  getMoreText: string;
  showLessText: string;
}

import React from 'react';
import { useSelector } from 'react-redux';
import MechanicsPage from '.';
import { getCurrentBrand } from '../../../store/selectors';

export const MechanicsContainer: React.FC = () => {
  const brand = useSelector(getCurrentBrand);

  return <MechanicsPage />;
};

export default MechanicsContainer;

import React, { useState } from 'react';
import Layout from '../../core/layout';
import { TrainersPage } from '@ui/pages/trainers-page';
import { IListItem } from '@ui/types/core';
import { useFetchCategories, useFetchCities, useMappedData } from '@api/hooks';
import { getCurrentCategories, getCurrentCity, getTrainers } from '@redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { IPresentationCardProps } from '@ui/composition/presentation-card/presentation-card.types';
import { setCategories, setCity } from '@redux/actions/search';

export const TrainersPageContainer: React.FC = () => {
  const dispatch = useDispatch();
  const [selectedCategories, setSelectedCategories] = useState<IListItem[]>(useSelector(getCurrentCategories));
  const [selectedCity, setSelectedCity] = useState<IListItem | undefined>(useSelector(getCurrentCity));
  const trainers = useMappedData(useSelector(getTrainers), (trainers): IPresentationCardProps[] =>
    trainers.map(({ id, description, image, name, lastName, rating, numberOfRatings, location }) => ({
      id,
      description,
      image,
      rating,
      numberOfRatings,
      location,
      descriptionShowMoreText: 'Dowiedz się więcej',
      actionText: 'Akcja',
      header: `${name} ${lastName}`,
    })),
  );

  const allCategories = useMappedData(useFetchCategories(), (categories): IListItem[] =>
    categories.map((city) => ({ id: city.id, value: city.name })),
  );

  const allCities = useMappedData(useFetchCities(), (cities): IListItem[] =>
    cities.map((city) => ({ id: city.id, value: city.name })),
  );

  // eslint-disable-next-line @typescript-eslint/ban-types
  const onCityChangeCallback = (_event: React.ChangeEvent<{}>, city: IListItem) => {
    setSelectedCity(city);
    dispatch(setCity(city));
  };

  const onCategoriesChangeCallback = (categories: IListItem[]) => {
    setSelectedCategories(categories);
    dispatch(setCategories(categories));
  };

  return (
    <Layout>
      <TrainersPage
        trainers={trainers}
        numberOfPages={10}
        cities={allCities}
        categories={allCategories}
        onCityChange={onCityChangeCallback}
        onCategoriesChange={onCategoriesChangeCallback}
        selectedCategories={selectedCategories}
        selectedCity={selectedCity}
      />
    </Layout>
  );
};

export default TrainersPageContainer;

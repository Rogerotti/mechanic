import React, { useEffect, useState } from 'react';
import Layout from '../../core/layout';
import { TrainersPage } from '@ui/pages/trainers-page';
import { IListItem, IListItemGrouped } from '@ui/types/core';
import { useMappedData } from '@api/hooks';
import { getCurrentCategory, getCurrentCity, getTrainers } from '@redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { IPresentationCardProps } from '@ui/composition/presentation-card/presentation-card.types';
import { setCategory, setCity } from '@redux/actions/search';
import { useCategories, useCities } from '../../../apollo/queries';

export const TrainersPageContainer: React.FC = () => {
  const dispatch = useDispatch();

  const { loading: categoryLoading, categories: categoriesData, generalCategories } = useCategories();

  const { loading: categoriesLoading, cities: citiesData } = useCities();

  const currentCategorySelected = useSelector(getCurrentCategory);
  currentCategorySelected;

  const [selectedGeneralCategory, setSelectedGeneralCategory] = useState<IListItem | undefined>(
    currentCategorySelected
      ? {
          id: currentCategorySelected.categoryId,
          value: currentCategorySelected.categoryName,
        }
      : null,
  );
  const [selectedCategory, setSelectedCategory] = useState<IListItemGrouped>(
    currentCategorySelected
      ? {
          groupId: currentCategorySelected.categoryId,
          groupValue: currentCategorySelected.categoryName,
          value: currentCategorySelected.subcategoryName,
          id: currentCategorySelected.subcategoryId,
        }
      : null,
  );
  const [selectedCity, setSelectedCity] = useState<IListItem | undefined>(useSelector(getCurrentCity));

  const filteredCategories = categoriesData?.filter((x) =>
    selectedGeneralCategory ? x.groupId === selectedGeneralCategory.id : true,
  );

  useEffect(() => {
    if (!categoryLoading) {
      const category = filteredCategories.find(
        (x) => x.id === selectedCategory?.id && x.groupId === selectedCategory.groupId,
      );
      console.log('category', category, filteredCategories, selectedCategory);
      const generalCategory = generalCategories.find((y) => y.id === category?.groupId);
      if (generalCategory) {
        setSelectedGeneralCategory(generalCategory);
      }
    }
  }, [categoryLoading]);

  useEffect(() => {
    if (
      !categoryLoading &&
      selectedGeneralCategory &&
      selectedCategory &&
      selectedCategory.groupId !== selectedGeneralCategory.id
    ) {
      const newCategory: IListItemGrouped = {
        id: null,
        value: null,
        groupId: selectedGeneralCategory.id,
        groupValue: selectedGeneralCategory.value,
      };
      setSelectedCategory(null);
      dispatch(setCategory(newCategory));
    }
  }, [selectedGeneralCategory]);

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

  // eslint-disable-next-line @typescript-eslint/ban-types
  const onCityChangeCallback = (_event: React.ChangeEvent<{}>, city: IListItem) => {
    setSelectedCity(city);
    dispatch(setCity(city));
  };

  const onCategoryChangeCallback = (category: IListItemGrouped) => {
    setSelectedCategory(category);
    dispatch(setCategory(category));
  };

  // eslint-disable-next-line @typescript-eslint/ban-types
  const onGeneralCategoryChangeCallback = (_event: React.ChangeEvent<{}>, category: IListItem) => {
    setSelectedGeneralCategory(category);
  };

  return (
    <Layout>
      <TrainersPage
        trainers={trainers}
        numberOfPages={10}
        cities={citiesData}
        citiesLoading={categoriesLoading}
        categories={filteredCategories}
        categoriesLoading={categoryLoading}
        generalCategories={generalCategories}
        onCityChange={onCityChangeCallback}
        onCategoryChange={onCategoryChangeCallback}
        onGeneralCategoryChange={onGeneralCategoryChangeCallback}
        selectedCategory={selectedCategory}
        selectedCity={selectedCity}
        selectedGeneralCategory={selectedGeneralCategory}
      />
    </Layout>
  );
};

export default TrainersPageContainer;

import React, { useEffect, useState } from 'react';
import Layout from '../../core/layout';
import { TrainersPage } from '@ui/pages/trainers-page';
import { IListItem, IListItemGrouped } from '@ui/types/core';
import { getCurrentCategory, getCurrentCity } from '@redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { IPresentationCardProps } from '@ui/composition/presentation-card/presentation-card.types';
import { setCategory, setCity } from '@redux/actions/search';
import { useCategories, useCities, useTrainers } from '../../../apollo/queries';
import { usePagination } from '../../core/pagination';
import { useHistory } from 'react-router-dom';

export const TrainersPageContainer: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const INITIAL_PAGE_PAGINATION = 2;
  const { loading: categoryLoading, categories: categoriesData, generalCategories } = useCategories();
  const { loading: categoriesLoading, cities: citiesData } = useCities();
  const { loading: trainersLoading, trainers: trainersData, trainersCount, getTrainers } = useTrainers();

  const { limit, offset, pageNumber, totalPages, setPageNumber } = usePagination(
    trainersCount,
    INITIAL_PAGE_PAGINATION,
    0,
  );

  const [selectedCity, setSelectedCity] = useState<IListItem | undefined>(useSelector(getCurrentCity));

  const currentCategorySelected = useSelector(getCurrentCategory);

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

  const fetchTrainers = (): void => {
    getTrainers({
      variables: {
        cityId: selectedCity?.id,
        subcategoryId: selectedCategory?.id,
        categoryId: selectedGeneralCategory?.id,
        offset: offset,
        limit: limit,
      },
    });
  };

  useEffect(() => {
    fetchTrainers();
  }, [offset]);

  const filteredCategories = categoriesData?.filter((x) =>
    selectedGeneralCategory?.id ? x.groupId === selectedGeneralCategory.id : true,
  );

  useEffect(() => {
    if (!categoryLoading) {
      const category = filteredCategories.find(
        (x) => x.id === selectedCategory?.id && x.groupId === selectedCategory.groupId,
      );

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

  const trainers = trainersData.map(
    (trainer): IPresentationCardProps => {
      return {
        id: trainer.id,
        description: trainer.description,
        image: trainer.image,
        rating: trainer.rating,
        numberOfRatings: trainer.totalRates,
        // TODO location
        location: trainer.locations?.length > 0 ? `${trainer.locations[0].name}` : '',
        descriptionShowMoreText: 'Dowiedz się więcej',
        actionText: 'Zarezerwuj',
        header: `${trainer.name} ${trainer.lastName}`,
        onActionClick: () => {
          history.push(`/trainers/${trainer.id}`);
        },
      };
    },
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

  const onSearchClick = () => {
    fetchTrainers();
  };

  const onPageChange = (page: number) => {
    setPageNumber(page);
  };

  return (
    <Layout>
      <TrainersPage
        page={pageNumber}
        trainers={trainers}
        trainersLoading={trainersLoading}
        numberOfPages={totalPages}
        cities={citiesData}
        citiesLoading={categoriesLoading}
        categories={filteredCategories}
        categoriesLoading={categoryLoading}
        generalCategories={generalCategories}
        onCityChange={onCityChangeCallback}
        onCategoryChange={onCategoryChangeCallback}
        onGeneralCategoryChange={onGeneralCategoryChangeCallback}
        onSearchClick={onSearchClick}
        onPageChange={onPageChange}
        selectedCategory={selectedCategory}
        selectedCity={selectedCity}
        selectedGeneralCategory={selectedGeneralCategory}
      />
    </Layout>
  );
};

export default TrainersPageContainer;

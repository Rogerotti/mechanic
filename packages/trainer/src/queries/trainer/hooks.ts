import { useMappedData } from '@api/hooks';
import { QueryLazyOptions, useLazyQuery, useQuery } from '@apollo/client';
import { GET_ALL_TRAINERS, GET_TRAINER } from '.';
import {
  IGetAllTrainersQuery,
  IGetAllTrainersQueryParams,
  IGeTrainerQuery,
  IGetTrainerQueryParams,
  ITrainerData,
} from './types';

export const useTrainer = (
  id: string,
): {
  loading: boolean;
  trainer: ITrainerData;
} => {
  const { data, loading } = useQuery<IGeTrainerQuery, IGetTrainerQueryParams>(GET_TRAINER, { variables: { id: id } });
  const trainer = data?.trainer;

  const trainerData = trainer
    ? {
        id: trainer.id,
        name: trainer.name,
        lastName: trainer.lastName,
        description: trainer.description,
        rating: trainer.rating,
        totalRates: trainer.totalRates,
        locations: trainer.locations,
        image: trainer.image,
      }
    : null;

  return {
    trainer: trainerData,
    loading,
  };
};

export const useTrainers = (): {
  loading: boolean;
  trainers: ITrainerData[];
  trainersCount: number;
  getTrainers: (options?: QueryLazyOptions<IGetAllTrainersQueryParams>) => void;
} => {
  const [getTrainers, { data, loading }] = useLazyQuery<IGetAllTrainersQuery, IGetAllTrainersQueryParams>(
    GET_ALL_TRAINERS,
  );

  const allTrainers = useMappedData(data?.trainers, (trainers): ITrainerData[] =>
    trainers
      ? trainers?.trainers.map((trainer) => ({
          id: trainer.id,
          name: trainer.name,
          lastName: trainer.lastName,
          description: trainer.description,
          rating: trainer.rating,
          totalRates: trainer.totalRates,
          locations: trainer.locations,
          image: trainer.image,
        }))
      : [],
  );

  return {
    trainers: allTrainers,
    trainersCount: data?.trainers?.trainersTotalNumber || 0,
    loading,
    getTrainers,
  };
};

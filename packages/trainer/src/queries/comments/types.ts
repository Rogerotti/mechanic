export interface IQueryComment {
  id: string;
  description: string;
  userImage: string;
  userFirstName: string;
  userLastName: string;
  userId: string;
  trainerId: string;
  date: string;
  rating: number;
}

export interface IGeCommentsQuery {
  comments: IQueryComment[];
}

export interface IGetCommentsQueryParams {
  trainerId: string;
}

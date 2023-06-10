import IReview from "./reviews";

export interface IDische {
  _id: string;
  title: string;
  description: string;
  img: string;
  price: number;
  reviews: IReview[];
}

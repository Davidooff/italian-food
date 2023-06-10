import IReview from "../types/reviews";

export default function getAvgRate(reviews: IReview[]): number {
  return reviews.length !== 0
    ? reviews.reduce((acc, review) => acc + review.review.rate, 0) /
        reviews.length
    : 0;
}

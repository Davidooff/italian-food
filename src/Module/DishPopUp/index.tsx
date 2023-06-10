import { Dispatch, SetStateAction } from "react";
import getAvgRate from "../../Service/getAvgRate";
import { IDische } from "../../types/dishe";
import Stars from "../Stars";
import "./dishPopUp.scss";

interface Props {
  dish: IDische;
  trigger: boolean;
  setTriger: Dispatch<SetStateAction<boolean>>;
}

function DishPopUp(props: Props) {
  const { _id, title, description, img, price, reviews } = props.dish;
  const avgRate = getAvgRate(reviews);

  return props.trigger ? (
    <div className="dish-pop-up">
      <div className="dish">
        <div
          className="close"
          onClick={() => {
            props.setTriger(false);
          }}
        >
          X
        </div>
        <img src={img} alt="Dish" />
        <div>
          <h2>{title}</h2>
          <Stars rate={avgRate} />
          <p className="desc">{description}</p>
          <p className="price">{price}$</p>
          <div className="revies">
            {reviews.map((review) => {
              const el = review.review;
              return (
                <div key={el._id} className="review">
                  <h3 className="review_username">{el.username}</h3>
                  <Stars rate={el.rate} />
                  <p className="review_desc">{el.description}</p>
                  <p className="review_upd">{el.updated} 00000000</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default DishPopUp;

import getAvgRate from "../../Service/getAvgRate";
import { IDische } from "../../types/dishe";
import Stars from "../Stars";
import "./dishPopUp.scss";

function DishPopUp(props: IDische) {
  const { _id, title, description, img, price, reviews } = props;
  const avgRate = getAvgRate(reviews);

  return (
    <div className="dish-pop-up">
      <div className="close">X</div>
      <img src={img} alt="Dish" />
      <div>
        <Stars rate={avgRate} />
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default DishPopUp;

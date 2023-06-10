import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { IDische } from "../../../types/dishe";
import "./menu.scss";
import Stars from "../../../Module/Stars";
import getAvgRate from "../../../Service/getAvgRate";
import DishPopUp from "../../../Module/DishPopUp";

function Menu() {
  const [dishes, setDishes] = useState<Array<IDische>>([]);
  const [trigger, setTrigger] = useState(false);
  const [dish, setDish] = useState<IDische>();

  console.log(`${process.env.REACT_APP_SERVER_URL}/food`);
  useEffect(() => {
    const dataFetch = async () => {
      const data = await (
        await fetch(`${process.env.REACT_APP_SERVER_URL}/food`)
      ).json();

      // set state when the data received
      setDishes(data);
    };

    dataFetch();
  }, []);

  return (
    <>
      {dish && (
        <DishPopUp dish={dish} trigger={trigger} setTriger={setTrigger} />
      )}

      <section className="dishes-section">
        {dishes.map((el) => {
          return (
            <Disch
              dish={el}
              trigger={trigger}
              setTrigger={setTrigger}
              setDish={setDish}
            />
          );
        })}
      </section>
    </>
  );
}

interface IDischProps {
  trigger: boolean;
  setTrigger: Dispatch<SetStateAction<boolean>>;
  dish: IDische;
  setDish: Dispatch<SetStateAction<IDische | undefined>>;
}

function Disch(props: IDischProps) {
  const { dish, setTrigger, setDish, trigger } = props;
  const avgRate = getAvgRate(dish.reviews);

  return (
    <>
      <div
        className="disch"
        onClick={() => {
          setTrigger(true);
          setDish(dish);
        }}
      >
        <img src={dish.img} alt="Disch" />
        <div>
          <h2>{dish.title}</h2>
          <Stars rate={avgRate} />
          <p className="desc">{dish.description.slice(0, 120)}...</p>
          <p className="price">{dish.price}$</p>
        </div>
      </div>
    </>
  );
}

export default Menu;

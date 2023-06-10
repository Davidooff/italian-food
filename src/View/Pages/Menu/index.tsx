import { useEffect, useState } from "react";
import { IDische } from "../../../types/dishe";
import "./menu.scss";
import Stars from "../../../Module/Stars";
import getAvgRate from "../../../Service/getAvgRate";

function Menu() {
  const [dishes, setDishes] = useState<Array<IDische>>([]);
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
    <section className="dishes-section">
      {dishes.map((el) => {
        return Disch(el);
      })}
    </section>
  );
}

function Disch(el: IDische) {
  const avgRate = getAvgRate(el.reviews);

  return (
    <div className="disch">
      <img src={el.img} alt="Disch" />
      <div>
        <h2>{el.title}</h2>
        <Stars rate={avgRate} />
        <p className="desc">{el.description.slice(0, 120)}...</p>
        <p className="price">{el.price}$</p>
      </div>
    </div>
  );
}

export default Menu;

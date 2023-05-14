import "./pizza.scss";
import pizza from "./img/pizza.png";
import lefes from "./img/lefes.png";

function Pizza() {
  return (
    <section className="pizza-section">
      <img src={pizza} alt="" className="pizza-img" />
      <img src={lefes} alt="" className="lefes-img" />
      <h2 className="section-title">Lorem Ipsum Dolor Sit Amer</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis
      </p>
      <div className="line"></div>
    </section>
  );
}
export default Pizza;

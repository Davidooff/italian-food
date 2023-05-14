import DisheEl from "../../Module/Dishe-el";
import "./dishes.scss";

function Dishes() {
  return (
    <section className="dishes">
      <h2 className="section-title">Lorem Ipsum Dolor</h2>
      <p className="under-title">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorum
        tenetur repellendus dolores perspiciatis eius ullam corrupti molestias
      </p>
      <div className="dishes-div">
        <DisheEl
          img="./img/food1.png"
          title="Lorem Ipsum"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
        />
        <DisheEl
          img="./img/food2.png"
          title="Lorem Ipsum"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
        />
        <DisheEl
          img="./img/food3.png"
          title="Lorem Ipsum"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
        />
      </div>
      <a href="" className="a-btn-black">
        SHOW MORE
      </a>
    </section>
  );
}
export default Dishes;

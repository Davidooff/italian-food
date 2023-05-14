import "./advantages.scss";

function Advantages() {
  return (
    <section className="advantages-section">
      <div className="advantages">
        <AdvantagesEl />
        <AdvantagesEl />
        <AdvantagesEl />
      </div>
      <h4>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis
      </h4>
      <p className="bottom-text">Lorem Ipsum</p>
    </section>
  );
}

function AdvantagesEl() {
  return (
    <div className="advantages-el">
      <h2 className="advantages-title">Lorem Ipsum</h2>
      <p>
        Lorem ipsum dolor sit amet, consecte sectetur adipisicing elit, tation
        omne ullamco laboris nisi ut aliqolore.
      </p>
    </div>
  );
}

export default Advantages;

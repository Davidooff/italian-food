import "./email.scss";

import lefes from "./img/lefes.png";

function Email() {
  return (
    <section className="email-section">
      <div className="email-content">
        <h2>Title Hire</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia odio vitae vestibulum vestibulum.
        </p>
        <div className="email-input">
          <input type="text" placeholder="Your Email" />
          <button>SUBSCRIBE</button>
        </div>
      </div>
      <img src={lefes} alt="" className="lefes" />
    </section>
  );
}
export default Email;

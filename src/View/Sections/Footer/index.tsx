import "./footer.scss";

import facebook from "./img/Facebook.png";
import instagram from "./img/Instagram.png";
import twitter from "./img/Twitter.png";
import whatsApp from "./img/WhatsApp.png";

function Footer() {
  return (
    <footer>
      <aside className="info">
        <h2>Title Here</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
          dignissim nunc, id maximus ex. Etiam nec dignissim elit, at dignissim
          enim.
        </p>
        <div className="social-media">
          <img src={instagram} alt="" />
          <img src={facebook} alt="" />
          <img src={twitter} alt="" />
          <img src={whatsApp} alt="" />
        </div>
      </aside>
      <aside className="routs">
        <div className="routs-col">
          <h3>About</h3>
          <ul>
            <li>History</li>
            <li>Our Team</li>
            <li>Brand Guidelines</li>
            <li>Terms&Condition</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="routs-col">
          <h3>About</h3>
          <ul>
            <li>History</li>
            <li>Our Team</li>
            <li>Brand Guidelines</li>
            <li>Terms&Condition</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="routs-col">
          <h3>About</h3>
          <ul>
            <li>History</li>
            <li>Our Team</li>
            <li>Brand Guidelines</li>
            <li>Terms&Condition</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </aside>
    </footer>
  );
}
export default Footer;

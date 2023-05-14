import "./main.scss";
import logo from "./img/logo.png";
import plate from "./img/plate.png";
import lefe from "./img/lefe.png";

function Main() {
  return (
    <section className="main-section">
      <aside className="content">
        <img src={logo} alt="" className="logo" />
        <h1>Italian Food</h1>
        <p className="under-title">LOREMIPSUM DOLOR</p>
        <a href="" className="a-btn-white">
          READ MORE
        </a>
        <p className="under-btn">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do iusmod
          tempor incididunt ut labore et dolore magna.
        </p>
      </aside>
      <aside className="ilustrations">
        <img src={plate} alt="" />
        <img src={lefe} alt="" className="lefe" />
      </aside>
    </section>
  );
}
export default Main;

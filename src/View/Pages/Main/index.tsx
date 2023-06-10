import Advantages from "../../Sections/Advantages";
import Dishes from "../../Sections/Dishes";
import Email from "../../Sections/Email";
import Footer from "../../Sections/Footer";
import Header from "../../Sections/Header";
import Info from "../../Sections/Info";
import MainSection from "../../Sections/Main";
import Pizza from "../../Sections/Pizza";
import Promos from "../../Sections/Promos";

import "./main.scss";

function Main() {
  return (
    <>
      {/* <Header /> */}
      <MainSection />
      <Dishes />
      <Info />
      <Promos />
      <Pizza />
      <Advantages />
      <Email />
      {/* <Footer /> */}
    </>
  );
}
export default Main;

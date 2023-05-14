import "./promos.scss";

type PromoEl = {
  id: string;
  img: string;
  title: string;
  description: string;
};

const promos: PromoEl[] = [
  {
    id: "1",
    img: "./img/promos/promo1.png",
    title: "Discount up to 50% All Excursions",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime eum sequi quas repudiandae iure obcaecati blanditiis similique recusandae delectus officia natus id, magnam perspiciatis sit est voluptate exercitationem laudantium nemo hic molestiae assumenda doloribus neque. Amet assumenda porro dolorum est similique laborum. Ratione cum alias dolorem laudantium obcaecati, laboriosam ea molestiae repudiandae fuga provident eaque sequi possimus enim tempora fugiat.",
  },
  {
    id: "2",
    img: "./img/promos/promo2.png",
    title: "January’s Promo: Buy 1 Get 1 Free!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime eum sequi quas repudiandae iure obcaecati blanditiis similique recusandae delectus officia natus id, magnam perspiciatis sit est voluptate exercitationem laudantium nemo hic molestiae assumenda doloribus neque. Amet assumenda porro dolorum est similique laborum. Ratione cum alias dolorem laudantium obcaecati, laboriosam ea molestiae repudiandae fuga provident eaque sequi possimus enim tempora fugiat.",
  },
];

function Promos() {
  return (
    promos && (
      <section className="promo-section">
        {promos.map((value, index) => {
          return <PromoEl {...value} reverse={(index + 1) % 2 === 0} />;
        })}
      </section>
    )
  );
}

interface Props extends PromoEl {
  reverse: boolean;
}

function PromoEl(props: Props) {
  const { id, img, title, description, reverse } = props;

  return (
    <div id={id} className={"promo-el " + (reverse ? "promo-el-reverse" : "")}>
      <aside>
        <img src={img} alt="" />
      </aside>
      <aside className="promo-el-content">
        <h3>{title}</h3>
        <p>{description.slice(0, 260) + "..."}</p>
        <a href="" className="a-btn-black">
          READ MORE
        </a>
      </aside>
    </div>
  );
}
export default Promos;

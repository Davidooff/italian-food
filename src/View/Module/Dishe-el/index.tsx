import "./disheEl.scss";

type Props = {
  img: string;
  title: string;
  description: string;
};

function DisheEl(props: Props) {
  const description = props.description.slice(0, 70) + "...";

  return (
    <div className="dishe-el">
      <img src={props.img} alt="" />
      <h3>{props.title}</h3>
      <p>{description}</p>
    </div>
  );
}
export default DisheEl;

import "./stars.scss";

function Stars(props: { rate: number }) {
  const style = { "--rating": props.rate } as React.CSSProperties;
  return (
    <div
      className="Stars"
      style={style}
      aria-label={`Rating of this product is ${props.rate} out of 5.`}
    ></div>
  );
}

export default Stars;

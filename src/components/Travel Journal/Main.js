export default function Main(props) {
  let lastItem;
  if (props.itemCount === props.arrLength) {
    lastItem = 0;
  } else {
    lastItem = 1;
  }
  return (
    <section>
      <div className="wrapper">
        <img src={props.img} className="section--image" />
        <div>
          <div className="locationInfo">
            <img src="./img/map-icon.png" className="locationIcon" />
            <p>{props.location}</p>
            <a href="#">View on Google Maps</a>
          </div>
          <h1>{props.title}</h1>
          <h6>{props.date}</h6>
          <p>{props.description}</p>
        </div>
      </div>
      {lastItem === 1 && <hr />}
    </section>
  );
}

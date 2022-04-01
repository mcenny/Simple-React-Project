export default function Card(props) {
  let badgeText
  if(props.openSpots === 0){
    badgeText = "SOLD OUT"
  }
  else if(props.location === "Online"){
    badgeText = "ONLINE"
  }
  return (
    <div className="cardWrapper">
      <div className="card">
        {badgeText && <div className="card--badge">{badgeText}</div>}
        <img src={props.photo} className="card--photo" />
        <div>
          <img src="./img/Star.png" className="card--star" />
          <span>{props.rating} </span>
          <span className="gray"> ({props.reviewCount}) </span>
          <span className="gray"> • {props.location}</span>
        </div>
        <p className="card--title">{props.title}</p>
        <p>
          <span className="bold">From ${props.price}</span> / person
        </p>
      </div>
    </div>
  );
}

// {id, title, description, price, photo, rating, reviewCount,
//   location, openSpots}

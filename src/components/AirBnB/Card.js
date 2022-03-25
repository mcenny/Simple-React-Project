export default function Card() {
  return (
    <div className="card">
      <img src="./img/katie-zaferas.png" className="card--photo" />
      <div>
        <img src="./img/Star.png" className="card--star" />
        <span >5.0 </span>
        <span className="gray"> (6) </span>
        <span className="gray"> • USA</span>
      </div>
      <p>Life lessons with Katie Zaferes</p>
      <p><span className="bold">From $136</span> / person</p>
    </div>
  );
}

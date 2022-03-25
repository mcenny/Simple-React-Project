export default function Header() {
  return (
    <div className="header">
      <div >
        <img src={require("../../img/Laura-Smith-Profile-Picture.png")} />
      </div>
      <h3>Laura Smith</h3>
      <p className="employeeRole">Frontend Developer</p>
      <p className="porfolioWebsite">laurasmith.website</p>
      <div className="socialMedia">
        <button name="Email" className="email">
          <i class="bi bi-envelope-fill"></i> Email
        </button>
        <button name="LinkedIn" className="linkedIn">
          <i class="bi bi-linkedin"></i> LinkedIn
        </button>
      </div>
    </div>
  );
}

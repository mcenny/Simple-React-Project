import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card";
import Contacts from "./Contacts";
import catData from "./catData";

export default function App() {
  const CatCard = catData.map((cat) => (
    <Contacts
      img={cat.img}
      name={cat.name}
      mobile={cat.mobile}
      email={cat.email}
    />
  ));

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Card className="card-component" />
      <div className="contact-section">{CatCard}</div>
    </div>
  );
}

{
  /* <Contacts
          img={require("../../img/cat-1.jpg")}
          name="Mr. Whiskerson"
          mobile="(202) 515-4321"
          email="mr.whiskerson@catnap.meow"
        />
        <Contacts
          img={require("../../img/cat-2.jpg")}
          name="Fluffykins"
          mobile="(202) 515-3829"
          email="mr.whiskerson@catnap.meow"
        />
        <Contacts
          img={require("../../img/cat-3.jpg")}
          name="Mr. Mongking"
          mobile="(202) 515-9982"
          email="mr.mongking@catnap.meow"
        />
        <Contacts
          img={require("../../img/cat-4.jpg")}
          name="Clawton "
          mobile="(202) 515-7215"
          email="clawton@catnap.meow"
        /> */
}

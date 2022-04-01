import React from "react";
// import MemeData from "./MemeData";

export default function Meme() {
  // const [memeUrl, setMemeUrl] = React.useState("http://i.imgflip.com/1bij.jpg");

  React.useEffect(
    () => {
      fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setAllMemes(data.data.memes))
      
    }, []
  )

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = React.useState()

  // const allMemeImages = MemeData.data.memes;

  function getMemeImage() {
    // const memeArray = allMemes;
    const memeArrayIndex = Math.floor(Math.random() * allMemes.length);
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: allMemes[memeArrayIndex].url,
    }));
  }

  function handleChange(event){
    const {name, value} = event.target
    setMeme(prevState => (
     {...prevState, [name]: value}
    ))
    console.log(meme);
  }

  return (
    <main>
      <div className="form">
        <div className="form-input-field">
          <input
          type="text" 
          placeholder="shut up" 
          className="form--input" 
          name="topText"
          value={meme.topText}
          onChange={handleChange}
          />
          <input
            type="text"
            placeholder="and take my money"
            className="form--input"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
          />
        </div>
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="memeContainer">
        <h2 className="memeText topText">{meme.topText}</h2>
      <img src={meme.randomImage} className="meme--image" />
      <h2 className="memeText bottomText">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
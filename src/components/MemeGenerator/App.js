import Navbar from "./Navbar";
import Meme from "./Meme";
import MemeData from "./MemeData";


// "http://i.imgflip.com/1bij.jpg"

export default function App(){
//   const memeElement = MemeData.map((meme) => (
//     <Meme img = {meme.data.memes.url} />
//   ))

  return (
    <div className="app">
      <Navbar />
      <Meme/>
      {/* {memeElement} */}
    </div>
  );
}

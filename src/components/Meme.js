import memes from "../memesData";
import { useState } from "react";

export default function Meme() {
  let randomNumber = Math.floor(Math.random() * memes.length);

  // State variables

  const [allMemesData, setAllMemesData] = useState(memes);
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: allMemesData[randomNumber].url,
  });

  const getMemeImage = (event) => {
    event.preventDefault();
    setMeme((prev) => {
      return {
        ...prev,
        randomImage: allMemesData[randomNumber].url,
      };
    });
  };

  return (
    <main>
      <form className="meme--form">
        <div className="form--input--text--container">
          <input className="form--text--1" placeholder="Top text" type="text" />
          <input
            className="form--text--2"
            placeholder="Bottom text"
            type="text"
          />
        </div>
        <button onClick={getMemeImage} className="form--submit">
          Get a new meme image 👀
        </button>
      </form>
      <img src={meme.randomImage} className="meme--img" alt="Random meme" />
    </main>
  );
}

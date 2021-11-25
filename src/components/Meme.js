import memes from "../memesData";
import { useState } from "react";

export default function Meme() {
  let randomNumber = Math.floor(Math.random() * memes.length);
  const [meme, setMeme] = useState(memes[randomNumber]);

  const getMemeImage = (event) => {
    event.preventDefault();
    randomNumber = Math.floor(Math.random() * memes.length);
    setMeme(memes[randomNumber]);
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
      <img src={meme.url} className="meme--img" alt="Random meme" />
    </main>
  );
}

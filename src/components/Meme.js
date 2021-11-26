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

  fetch("https://swapi.dev/api/people/1").then((res) =>
    res.json().then((data) => console.log(data))
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMeme((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <main>
      <form className="meme--form">
        <div className="form--input--text--container">
          <input
            value={meme.topText}
            className="form--text--1"
            placeholder="Top text"
            type="text"
            name="topText"
            onChange={handleChange}
          />
          <input
            value={meme.bottomText}
            className="form--text--2"
            placeholder="Bottom text"
            type="text"
            name="bottomText"
            onChange={handleChange}
          />
        </div>
        <button onClick={getMemeImage} className="form--submit">
          Get a new meme image 👀
        </button>
      </form>
      <div className="meme--img">
        <img src={meme.randomImage} alt="Random meme" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}

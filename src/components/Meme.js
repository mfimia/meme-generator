import { useEffect, useContext } from "react";
import MemeContext from "../context/MemeContext";

export default function Meme() {
  const memeContext = useContext(MemeContext);
  const { meme, getMemeImage, setAllMemesData, setMeme } = memeContext;

  // Making an api call to fetch all meme data
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes").then((res) =>
      res.json().then((data) => {
        setAllMemesData(data.data.memes);
      })
    );
    // eslint-disable-next-line
  }, []);

  // Listening to inputs to display screen text
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
          Try another one 👀
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

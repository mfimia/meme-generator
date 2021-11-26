import { useState, useEffect } from "react";

export default function Meme() {
  // State variables
  const [allMemesData, setAllMemesData] = useState([]);
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const getMemeImage = (event) => {
    event.preventDefault();
    let randomNumber = Math.floor(Math.random() * 100);
    setMeme((prev) => {
      return {
        ...prev,
        randomImage: allMemesData[randomNumber].url,
      };
    });
  };

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes").then((res) =>
      res.json().then((data) => {
        setAllMemesData(data.data.memes);
      })
    );
  }, []);

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

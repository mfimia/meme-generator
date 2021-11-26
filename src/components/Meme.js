import { useState, useEffect } from "react";

export default function Meme() {
  // State variables
  const [allMemesData, setAllMemesData] = useState([]);
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    // Setting default value on favourite meme
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  // Randzomizes the url of the image on button click (AKA form submit)
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

  // Making an api call to fetch all meme data
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes").then((res) =>
      res.json().then((data) => {
        setAllMemesData(data.data.memes);
      })
    );
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

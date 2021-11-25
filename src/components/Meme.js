import memes from "../memesData";

export default function Meme() {
  const getMemeImage = (event) => {
    event.preventDefault();
    const randomNumber = Math.floor(Math.random() * memes.length);
    const chosenMeme = memes[randomNumber];
    console.log(chosenMeme);
  };

  return (
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
  );
}

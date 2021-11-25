import memes from "../memesData";
console.log(memes);

export default function Meme() {
  const handleClick = (event) => {
    event.preventDefault();
    const randomNumber = Math.floor(Math.random() * 100);
    const chosenMeme = memes.filter((meme, index) => {
      return index === randomNumber;
    });
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
      <button onClick={handleClick} className="form--submit">
        Get a new meme image 👀
      </button>
    </form>
  );
}

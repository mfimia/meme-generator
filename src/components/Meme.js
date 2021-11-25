export default function Meme() {
  const handleClick = (event) => {
    event.preventDefault();
    console.log("I was clicked!");
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

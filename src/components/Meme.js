export default function Meme() {
  return (
    <form className="meme--form">
      <div className="form--input--text--container">
        <input className="form--text--1" type="text" />
        <input className="form--text--2" type="text" />
      </div>
      <input
        className="form--submit"
        value="Get a new meme image 👀"
        type="button"
      />
    </form>
  );
}

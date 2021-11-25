import logo from "../img/yaoming-meme-small.png";

export default function Header() {
  return (
    <header className="meme--header">
      <img className="header--logo" src={logo} alt="Meme generator logo" />
      <h3 className="header--title">Meme Generator</h3>
    </header>
  );
}

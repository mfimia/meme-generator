import Logo from "./Logo";

export default function Header() {
  return (
    <header className="meme--header">
      <Logo />
      <h3 className="header--title">Meme Generator</h3>
    </header>
  );
}

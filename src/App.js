import Header from "./components/Header";
import Meme from "./components/Meme";
import Uploader from "./components/Uploader";
import "./index.css";
import MemeState from "./context/MemeState";

export default function App() {
  return (
    <MemeState>
      <div className="App">
        <Header />
        <Meme />
      </div>
      <Uploader />
    </MemeState>
  );
}

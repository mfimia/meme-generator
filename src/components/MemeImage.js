import { useContext, forwardRef } from "react";
import MemeContext from "../context/MemeContext";

const MemeImage = forwardRef(() => {
  const memeContext = useContext(MemeContext);

  const { meme, memeRef } = memeContext;
  const { randomImage, topText, bottomText } = meme;

  return (
    <div ref={memeRef} className="meme--img">
      <img src={randomImage} alt="Random meme" />
      <h2 className="meme--text top">{topText}</h2>
      <h2 className="meme--text bottom">{bottomText}</h2>
    </div>
  );
});

export default MemeImage;

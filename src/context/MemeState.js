import { useState } from "react";
import MemeContext from "./MemeContext";

const MemeState = (props) => {
  const [allMemesData, setAllMemesData] = useState([]);
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    // Setting default value on favourite meme
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  // Get single meme
  const getMemeImage = (event) => {
    event.preventDefault();
    const randomNumber = Math.floor(Math.random() * 100);
    setMeme((prev) => {
      return {
        ...prev,
        randomImage: allMemesData[randomNumber].url,
      };
    });
  };

  return (
    <MemeContext.Provider
      value={{
        meme,
        allMemesData,
        setMeme,
        getMemeImage,
        setAllMemesData,
      }}
    >
      {props.children}
    </MemeContext.Provider>
  );
};

export default MemeState;

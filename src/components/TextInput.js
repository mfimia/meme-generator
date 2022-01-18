import { useContext } from "react";
import PropTypes from "prop-types";
import MemeContext from "../context/MemeContext";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";

const TextInput = ({ name }) => {
  // Listening to inputs to display screen text
  const memeContext = useContext(MemeContext);
  const { setMeme, meme } = memeContext;
  const { topText, bottomText } = meme;

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
    <Box sx={{ height: 20, ml: 3 }}>
      <TextField
        name={name}
        InputLabelProps={{
          sx: {
            fontFamily: "Carter One",
            pr: 1,
            backgroundColor: "white",
          },
        }}
        label={name === "topText" ? " Top text" : "Bottom text"}
        size="small"
        variant="outlined"
        onChange={handleChange}
        value={name === "topText" ? topText : bottomText}
        sx={{ width: "80%" }}
      />
    </Box>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};

export default TextInput;

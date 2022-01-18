import { useContext, forwardRef } from "react";
import MemeContext from "../context/MemeContext";
import CardMedia from "@mui/material/CardMedia";
import { Box, Typography } from "@mui/material";
import { memeText } from "../utils/memeText";

const MemeImage = forwardRef(() => {
  const memeContext = useContext(MemeContext);

  const { meme, memeRef } = memeContext;
  const { randomImage, topText, bottomText } = meme;

  return (
    <Box position={"relative"} ref={memeRef} component="div">
      <Typography sx={memeText}>{topText}</Typography>
      <Typography bottom={0} sx={memeText}>
        {bottomText}
      </Typography>
      <CardMedia component="img" width="294" image={randomImage} alt="Meme" />
    </Box>
  );
});

export default MemeImage;

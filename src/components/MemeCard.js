import { useState, useContext, useEffect } from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DownloadIcon from "@mui/icons-material/Download";
import CameraswitchIcon from "@mui/icons-material/Cameraswitch";
import Button from "@mui/material/Button";
import ExportMenu from "./ExportMenu";
import MemeContext from "../context/MemeContext";
import Uploader from "./Uploader";
import TextInput from "./TextInput";
import MemeImage from "./MemeImage";
import Tooltip from "@mui/material/Tooltip";

export default function RecipeReviewCard() {
  const [anchorEl, setAnchorEl] = useState(null);

  const memeContext = useContext(MemeContext);
  const { getMemeImage, setAllMemesData } = memeContext;

  // Making an api call to fetch all meme data
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes").then((res) =>
      res.json().then((data) => {
        setAllMemesData(data.data.memes);
      })
    );
    // eslint-disable-next-line
  }, []);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card elevation={10} sx={{ maxWidth: 400, margin: "auto", mt: "8vh" }}>
      <CardHeader
        action={
          <Tooltip title="Random picture">
            <IconButton
              color="primary"
              onClick={getMemeImage}
              aria-label="Change pic"
            >
              <CameraswitchIcon fontSize="large" />
            </IconButton>
          </Tooltip>
        }
        title={
          <Typography
            fontWeight={900}
            fontSize={24}
            ml={2}
            fontFamily={"Gloria Hallelujah"}
          >
            Meme Generator
          </Typography>
        }
      />
      <CardContent>
        <Box
          component="form"
          mb={4}
          display={"flex"}
          autoComplete="off"
          noValidate
        >
          <TextInput name="topText" />
          <TextInput name="bottomText" />
        </Box>
      </CardContent>
      <MemeImage />
      <CardActions disableSpacing>
        <ExportMenu handleClose={handleClose} open={open} anchorEl={anchorEl} />
        <Uploader />
        <Tooltip title="Export meme">
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{ marginLeft: "auto" }}
          >
            <DownloadIcon fontSize="large" />
          </Button>
        </Tooltip>
      </CardActions>
    </Card>
  );
}

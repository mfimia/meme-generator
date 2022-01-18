import { useState, useContext } from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DownloadIcon from "@mui/icons-material/Download";
import CameraswitchIcon from "@mui/icons-material/Cameraswitch";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import Button from "@mui/material/Button";
import ExportMenu from "./ExportMenu";
import MemeContext from "../context/MemeContext";
import Uploader from "./Uploader";

export default function RecipeReviewCard() {
  const [anchorEl, setAnchorEl] = useState(null);

  const memeContext = useContext(MemeContext);
  const { meme, getMemeImage, setAllMemesData, setMeme, memeRef } = memeContext;

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card sx={{ maxWidth: 400, margin: "auto" }}>
      <CardHeader
        avatar={<Avatar>M</Avatar>}
        action={
          <IconButton aria-label="Change pic">
            <CameraswitchIcon />
          </IconButton>
        }
        title="Meme Generator"
      />
      <CardMedia
        component="img"
        width="294"
        image={meme.randomImage}
        alt="Meme"
      />
      <CardContent></CardContent>
      <CardActions disableSpacing>
        <ExportMenu handleClose={handleClose} open={open} anchorEl={anchorEl} />
        <Uploader />
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{ marginLeft: "auto" }}
        >
          <DownloadIcon />
        </Button>
      </CardActions>
    </Card>
  );
}

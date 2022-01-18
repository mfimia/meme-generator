import { useContext } from "react";
import MemeContext from "../context/MemeContext";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";

const Uploader = () => {
  const memeContext = useContext(MemeContext);
  const { setMeme } = memeContext;

  const Input = styled("input")({
    display: "none",
  });

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const img = event.target.files[0];
      setMeme((prev) => {
        return {
          ...prev,
          randomImage: URL.createObjectURL(img),
        };
      });
    }
  };

  return (
    <label htmlFor="icon-button-file">
      <Input
        onChange={handleImageChange}
        accept="image/*"
        id="icon-button-file"
        type="file"
      />
      <IconButton color="primary" aria-label="upload picture" component="span">
        <UploadFileIcon />
      </IconButton>
    </label>
  );
};

export default Uploader;

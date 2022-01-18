import { useContext } from "react";
import PropTypes from "prop-types";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MemeContext from "../context/MemeContext";
import {
  exportComponentAsJPEG,
  exportComponentAsPDF,
  exportComponentAsPNG,
} from "react-component-export-image";

const ExportMenu = ({ open, handleClose, anchorEl }) => {
  const memeContext = useContext(MemeContext);
  const { memeRef } = memeContext;

  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
    >
      <MenuItem
        onClick={() => {
          handleClose();
          exportComponentAsPNG(memeRef);
        }}
      >
        PNG
      </MenuItem>
      <MenuItem
        onClick={() => {
          handleClose();
          exportComponentAsPDF(memeRef);
        }}
      >
        PDF
      </MenuItem>
      <MenuItem
        onClick={() => {
          handleClose();
          exportComponentAsJPEG(memeRef);
        }}
      >
        JPEG
      </MenuItem>
    </Menu>
  );
};

ExportMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  anchorEl: PropTypes.any,
  handleClose: PropTypes.func.isRequired,
};

export default ExportMenu;

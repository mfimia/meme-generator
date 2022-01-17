import { useContext } from "react";
import MemeContext from "../context/MemeContext";

const Uploader = () => {
  const memeContext = useContext(MemeContext);
  const { setMeme } = memeContext;

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
    <div>
      <input
        className="file-uploader"
        type="file"
        name="userFile"
        id="file-uploader"
        onChange={handleImageChange}
      />
    </div>
  );
};

export default Uploader;

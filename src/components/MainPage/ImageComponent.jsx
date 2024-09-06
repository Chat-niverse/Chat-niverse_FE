import "./ImageComponent.css";
import DefaultImage from "../../assets/Images/DefaultImage.svg";

const ImageComponent = ({ imageurl }) => {
  return (
    <div>
      <img src={imageurl} className="image_file" />
    </div>
  );
};

export default ImageComponent;

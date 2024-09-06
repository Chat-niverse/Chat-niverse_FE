import "./ImageComponent.css";
import DefaultImage from "../../assets/Images/DefaultImage.svg";

function ImageComponent() {
  return (
    <div>
      <img src={DefaultImage} className="image_file" />
    </div>
  );
}

export default ImageComponent;

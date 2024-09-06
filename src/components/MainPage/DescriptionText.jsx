import "./DescriptionText.css";

const DescriptionText = ({ playlog }) => {
  return (
    <div className="Description_Textbox">
      <div className="Text">{playlog}</div>
    </div>
  );
};

export default DescriptionText;

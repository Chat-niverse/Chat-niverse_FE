import "./ChoicesBox.css";

const ChoicesBox = ({ choices, onChoiceSelect }) => {
  const handleClick = (index) => {
    onChoiceSelect(index);
  };

  return (
    <div className="choices-container">
      {choices.map((choice, index) => (
        <div
          key={index}
          className="choice-box"
          onClick={() => handleClick(index)}
        >
          {choice}
        </div>
      ))}
    </div>
  );
};

export default ChoicesBox;

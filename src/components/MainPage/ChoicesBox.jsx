import "./ChoicesBox.css";

const ChoicesBox = ({ choices, onChoiceSelect }) => {
  const handleClick = (index) => {
    onChoiceSelect(index);
  };

  const availableChoices = choices
    ? [choices.first, choices.second, choices.third].filter(Boolean) // Filter out any undefined or null values
    : [];

  return (
    <div className="choices-container">
      {availableChoices.map((choice, index) => (
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

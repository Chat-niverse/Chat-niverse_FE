import { useState } from "react";
import ImageComponent from "./components/ImageComponent";
import DescriptionText from "./components/DescriptionText";
import ChoicesBox from "./components/ChoicesBox";
import "./App.css";

function App() {
  const [selectedChoice, setSelectedChoice] = useState(null);
  const choices = ["Choice 1", "Choice 2", "Choice 3", "Choice 4"];

  const handleChoiceSelect = (index) => {
    setSelectedChoice(index);
  };

  return (
    <>
      <ImageComponent />
      <DescriptionText />
      <ChoicesBox choices={choices} onChoiceSelect={handleChoiceSelect} />
      {selectedChoice !== null && (
        <p>Selected choice is {selectedChoice + 1}</p>
      )}
    </>
  );
}

export default App;

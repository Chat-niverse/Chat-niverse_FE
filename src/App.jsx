import React, { useState } from "react";
import ImageComponent from "./components/MainPage/ImageComponent";
import DescriptionText from "./components/MainPage/DescriptionText";
import ChoicesBox from "./components/MainPage/ChoicesBox";
import InitializePage from "./components/InitializePage/InitializePage";
import "./App.css";

function App() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const choices = ["Choice 1", "Choice 2", "Choice 3", "Choice 4"];

  const handleChoiceSelect = (index) => {
    setSelectedChoice(index);
  };

  const handleFormSubmit = () => {
    setIsFormSubmitted(true);
  };

  return (
    <>
      <div className="App">
        {isFormSubmitted ? (
          <div>
            <ImageComponent />
            <DescriptionText />
            <ChoicesBox choices={choices} onChoiceSelect={handleChoiceSelect} />
            {selectedChoice !== null && (
              <p>Selected choice is {selectedChoice + 1}</p>
            )}
          </div>
        ) : (
          <div>
            <InitializePage onFormSubmit={handleFormSubmit}></InitializePage>
          </div>
        )}
      </div>
    </>
  );
}

export default App;

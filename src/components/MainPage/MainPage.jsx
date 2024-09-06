import "./MainPage.css";
import React from "react";
import ImageComponent from "./ImageComponent";
import DescriptionText from "./DescriptionText";
import ChoicesBox from "./ChoicesBox";
import Header from "../Header/Header";
import UIs from "./UIs";

const MainPage = ({
  choices,
  handleChoiceSelect,
  selectedChoice,
  healthpoint,
  inventory,
}) => {
  return (
    <div className="MainPage">
      <Header />
      <div className="mainpage_content">
        <ImageComponent />
        <UIs healthpoint={healthpoint} inventory={inventory} />
        <DescriptionText />
        <ChoicesBox choices={choices} onChoiceSelect={handleChoiceSelect} />
        {selectedChoice !== null && (
          <p>Selected choice is {selectedChoice + 1}</p>
        )}
      </div>
    </div>
  );
};

export default MainPage;

import "./MainPage.css";
import React from "react";
import ImageComponent from "./ImageComponent";
import DescriptionText from "./DescriptionText";
import ChoicesBox from "./ChoicesBox";
import Header from "../Header/Header";
import UIs from "./UIs";

const MainPage = ({ formData, handleChoiceSelect, selectedChoice }) => {
  return (
    <div className="MainPage">
      <Header />
      <div className="mainpage_content">
        <ImageComponent />
        <UIs healthpoint={formData.life} inventory={formData.inventory} />
        <DescriptionText />
        <ChoicesBox
          choices={formData.choices}
          onChoiceSelect={handleChoiceSelect}
        />
        {selectedChoice !== null && (
          <p>Selected choice is {selectedChoice + 1}</p>
        )}
      </div>
    </div>
  );
};

export default MainPage;

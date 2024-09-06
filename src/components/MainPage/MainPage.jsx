import "./MainPage.css";
import React from "react";
import ImageComponent from "./ImageComponent";
import DescriptionText from "./DescriptionText";
import ChoicesBox from "./ChoicesBox";
import Header from "../Header/Header";
import UIs from "./UIs";

const MainPage = ({
  formData,
  setFormData,
  handleChoiceSelect,
  selectedChoice,
}) => {
  return (
    <div className="MainPage">
      <Header />
      <div className="mainpage_content">
        <ImageComponent imageurl={formData.imageurl} />
        <UIs formData={formData} />
        <DescriptionText playlog={formData.playlog} />
        <ChoicesBox
          choices={formData.choices}
          onChoiceSelect={handleChoiceSelect}
        />
      </div>
    </div>
  );
};

export default MainPage;

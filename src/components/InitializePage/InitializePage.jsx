import React, { useState } from "react";
import "./InitializePage.css";
import InitializeForm from "./InitializeForm";
import Logo from "../../assets/Images/chatniverselogo.png";

const InitializePage = ({ onFormSubmit }) => {
  return (
    <div className="InitializePage">
      <div className="firstpage_image_container">
        <img src={Logo} className="firstpage_image_file" />
        <span className="project_name">Chat-Niverse</span>
      </div>
      <div className="InitializePage_Text">
        당신이 꿈꾸는 이야기를 들려주세요.
      </div>
      <InitializeForm onSubmit={onFormSubmit}></InitializeForm>
    </div>
  );
};

export default InitializePage;

import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import "./InitializePage.css";
import InitializeForm from "./InitializeForm";
import Header from "../Header/Header";

const InitializePage = ({ onFormSubmit }) => {
  return (
    <div className="InitializePage">
      <Header />
      <div className="InitializePage_content">
        <div className="InitializePage_Text">
          <TypeAnimation
            sequence={["당신이 꿈꾸는 이야기를 들려주세요."]}
            wrapper="span"
            speed={7}
            style={{ fontSize: "0.7em", display: "inline-block" }}
            repeat={1}
          />
        </div>
        <InitializeForm onSubmit={onFormSubmit}></InitializeForm>
      </div>
    </div>
  );
};

export default InitializePage;

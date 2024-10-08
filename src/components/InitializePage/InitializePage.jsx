import React, { useState } from "react";
import "./InitializePage.css";
import InitializeForm from "./InitializeForm";
import Header from "../Header/Header";

const InitializePage = ({ onFormSubmit }) => {
  return (
    <div className="InitializePage">
      <Header />
      <div className="InitializePage_content">
        <div className="InitializePage_Text">
          당신이 꿈꾸는 이야기를 들려주세요.
        </div>
        <InitializeForm onSubmit={onFormSubmit}></InitializeForm>
      </div>
    </div>
  );
};

export default InitializePage;

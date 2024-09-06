import React, { useState } from "react";
import "./InitializePage.css";
import InitializeForm from "./InitializeForm";

const InitializePage = ({ onFormSubmit }) => {
  return (
    <div className="InitializePage">
      <div className="InitializePage_Text">
        당신이 꿈꾸는 이야기를 들려주세요.
      </div>
      <InitializeForm onSubmit={onFormSubmit}></InitializeForm>
    </div>
  );
};

export default InitializePage;

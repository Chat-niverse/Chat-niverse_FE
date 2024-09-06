import React, { useState, useEffect } from "react";
import MainPage from "./components/MainPage/MainPage";
import InitializePage from "./components/InitializePage/InitializePage";
import FirstPage from "./components/FirstPage/FirstPage";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("firstPage");
  const [formData, setFormData] = useState({});
  const [selectedChoice, setSelectedChoice] = useState(null);

  const handleChoiceSelect = (index) => {
    setSelectedChoice(index);
  };

  const handleEnter = () => {
    setCurrentPage("initializePage");
  };

  return (
    <>
      <div className="App">
        {currentPage === "firstPage" && <FirstPage onEnter={handleEnter} />}
        {currentPage === "initializePage" && (
          <InitializePage
            setFormData={setFormData}
            setCurrentPage={setCurrentPage}
          />
        )}
        {currentPage === "mainpage" && (
          <MainPage
            formData={formData}
            setFormData={setFormData}
            handleChoiceSelect={handleChoiceSelect}
            selectedChoice={selectedChoice}
          />
        )}
      </div>
    </>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import axios from "axios";
import MainPage from "./components/MainPage/MainPage";
import InitializePage from "./components/InitializePage/InitializePage";
import FirstPage from "./components/FirstPage/FirstPage";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("firstPage");
  const [submittedData, setSubmittedData] = useState(null);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const choices = ["Choice 1", "Choice 2", "Choice 3", "Choice 4"];

  const handleChoiceSelect = (index) => {
    setSelectedChoice(index);
  };

  const handleEnter = () => {
    setCurrentPage("initializePage");
  };

  const handleFormSubmit = (formData) => {
    // Set the form data when it is confirmed
    setSubmittedData(formData);
    setCurrentPage("finalPage");
  };

  // Effect to trigger the Axios POST request when formData is submitted
  useEffect(() => {
    if (submittedData) {
      const submitFormData = async () => {
        try {
          const response = await axios.post(
            "http://43.200.1.120/api/start",
            {
              isStart: submittedData.isStart,
              username: submittedData.username,
              worldview: submittedData.worldview,
              charsetting: submittedData.charsetting,
              aim: submittedData.aim,
            },
            {
              headers: {
                "Content-Type": "application/json", // Specify the content-type as JSON
              },
            }
          );
          console.log("Form submitted successfully:", response.data);
        } catch (error) {
          console.error("Error submitting form:", error);
        }
      };

      submitFormData();
    }
  }, [submittedData]);

  //submittedData.life = 3;

  return (
    <>
      <div className="App">
        {currentPage === "firstPage" && <FirstPage onEnter={handleEnter} />}
        {currentPage === "initializePage" && (
          <InitializePage onFormSubmit={handleFormSubmit} />
        )}
        {currentPage === "finalPage" && (
          <MainPage
            choices={choices}
            handleChoiceSelect={handleChoiceSelect}
            selectedChoice={selectedChoice}
            healthpoint={submittedData.life}
            inventory={submittedData.inventory}
          />
        )}
      </div>
    </>
  );
}

export default App;

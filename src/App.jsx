import React, { useState, useEffect } from "react";
import axios from "axios";
import ImageComponent from "./components/MainPage/ImageComponent";
import DescriptionText from "./components/MainPage/DescriptionText";
import ChoicesBox from "./components/MainPage/ChoicesBox";
import InitializePage from "./components/InitializePage/InitializePage";
import "./App.css";

function App() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const choices = ["Choice 1", "Choice 2", "Choice 3", "Choice 4"];

  const handleChoiceSelect = (index) => {
    setSelectedChoice(index);
  };

  // Effect to trigger the Axios POST request when formData is submitted
  useEffect(() => {
    if (submittedData) {
      const submitFormData = async () => {
        try {
          const response = await axios.post(
            "https://your-api-endpoint.com/submit",
            submittedData
          );
          console.log("Form submitted successfully:", response.data);
        } catch (error) {
          console.error("Error submitting form:", error);
        }
      };

      submitFormData();
    }
  }, [submittedData]);

  const handleFormSubmit = (formData) => {
    // Set the form data when it is confirmed
    setSubmittedData(formData);
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

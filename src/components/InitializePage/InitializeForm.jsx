import React, { useState } from "react";
import { produce } from "immer";
import axios from "axios";
import "./InitializeForm.css";
import { TypeAnimation } from "react-type-animation";

const InitializeForm = ({ setCurrentPage, set2FormData }) => {
  const [formData, updateFormData] = useState({
    isStart: 1,
    username: "",
    worldview: "",
    charsetting: "",
    aim: "",
    life: 3,
    inventory: {},
    isfull: false,
    playlog: "",
    gptsays: "",
    selectedchoice: "",
    choices: {
      first: "",
      second: "",
      third: "",
    },
    imageurl: "",
  });

  const [step, setStep] = useState(1); // Step state to track current form step

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    updateFormData((prevData) => 
      produce(prevData, (draft) => {
        const keys = name.split(".");  // Handle nested fields
  
        if (keys.length === 1) {
          draft[name] = value;  // Simple update
        } else {
          draft[keys[0]][keys[1]] = value;  // Nested update
        }
      })
    );
  };

    // Handle both simple and nested state updates
    updateFormData((prevData) => {
      const keys = name.split("."); // Handle nested fields like choices.first

      if (keys.length === 1) {
        // Update simple fields
        return { ...prevData, [name]: value };
      } else {
        // Update nested fields
        return {
          ...prevData,
          [keys[0]]: {
            ...prevData[keys[0]],
            [keys[1]]: value,
          },
        };
      }
    });
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    setStep((prevStep) => prevStep + 1); // Go to the next step
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://43.200.1.120/api/start",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      // Update formData with immer
      updateFormData((prevData) =>
        produce(prevData, (draft) => {
          draft.isStart = response.data.result.isStart || 0;
          draft.username = response.data.result.username || "";
          draft.worldview = response.data.result.worldview || "세계관이 없습니다.";
          draft.charsetting = response.data.result.charsetting || "성격 설정이 없습니다.";
          draft.aim = response.data.result.aim || "목표가 설정되지 않았습니다.";
          draft.life = response.data.result.life || 3;
          draft.inventory = response.data.result.inventory || {};
          draft.isfull = response.data.result.isfull || false;
          draft.playlog = response.data.result.playlog || "플레이 로그가 없습니다.";
          draft.gptsays = response.data.result.gptsays || "";
          draft.selectedchoice = response.data.result.selectedchoice || "";
          draft.choices.first = response.data.result.choices?.first || "";
          draft.choices.second = response.data.result.choices?.second || "";
          draft.choices.third = response.data.result.choices?.third || "";
          draft.imageurl = response.data.result.imageurl || "";
        })
      );
      console.log({draft});
      console.log({response});
  
      setCurrentPage("mainpage");
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };
  
  const handleReset = () => {
    setStep(1);
    set2FormData({
      isStart: 1,
      username: "",
      worldview: "",
      charsetting: "",
      aim: "",
      //   choices: [],
      //   selectedchoice: null,
      //   status: [],
      //   life: 3,
      //   inventory: [
      //     ["knife", 1],
      //     ["stone", 2],
      //   ],
      //   isfull: false,
      //   playlog: null,
      //   gptsays: null,
      // 0이면 진행중, 1이면 시작
    });
  };

  return (
    <form className="form-container">
      {step === 1 && (
        <>
          <TypeAnimation
            sequence={["당신의 이름은 무엇인가요?"]}
            wrapper="span"
            speed={7}
            style={{ fontSize: "1.5em", display: "inline-block" }}
            repeat={1}
          />
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="제 이름은..."
          />
          <button onClick={handleNextStep} className="button">
            확인
          </button>
        </>
      )}

      {step === 2 && (
        <>
          <TypeAnimation
            sequence={["당신의 세계관은 무엇인가요?"]}
            wrapper="span"
            speed={7}
            style={{ fontSize: "1.5em", display: "inline-block" }}
            repeat={1}
          />
          <input
            type="text"
            name="worldview"
            value={formData.worldview}
            onChange={handleChange}
            placeholder="제가 살고 있는 세계는..."
          />
          <button onClick={handleNextStep} className="button">
            확인
          </button>
        </>
      )}

      {step === 3 && (
        <>
          <TypeAnimation
            sequence={["당신의 성격은 무엇인가요?"]}
            wrapper="span"
            speed={7}
            style={{ fontSize: "1.5em", display: "inline-block" }}
            repeat={1}
          />
          <input
            type="text"
            name="charsetting"
            value={formData.charsetting}
            onChange={handleChange}
            placeholder="제 성격은..."
          />
          <button onClick={handleNextStep} className="button">
            확인
          </button>
        </>
      )}

      {step === 4 && (
        <>
          <TypeAnimation
            sequence={["당신의 목표는 무엇인가요?"]}
            wrapper="span"
            speed={7}
            style={{ fontSize: "1.5em", display: "inline-block" }}
            repeat={1}
          />
          <input
            type="text"
            name="aim"
            value={formData.aim}
            onChange={handleChange}
            placeholder="제가 이루고 싶은 것은..."
          />
          <button onClick={handleNextStep} className="button">
            확인
          </button>
        </>
      )}

      {/* Final confirmation step */}
      {step === 5 && (
        <div>
          <TypeAnimation
            sequence={[
              `이 이야기가 당신의 이야기가 맞나요?\n\n당신의 이름은 ${formData.username}입니다.\n당신의 세계관은 ${formData.worldview}입니다.\n당신의 성격은 ${formData.charsetting}입니다.\n당신의 목표는 ${formData.aim}입니다.\n\n`,
            ]}
            style={{
              fontSize: "1em",
              whiteSpace: "pre-line",
              height: "195px",
              display: "block",
            }}
            wrapper="span"
            speed={7}
            repeat={1}
            cursor={false}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            className="button"
          >
            네
          </button>
          <button onClick={handleReset} className="button cancel">
            아니오
          </button>
        </div>
      )}
    </form>
  );
};

export default InitializeForm;

import React, { useState } from "react";
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
    updateFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleNextStep = (e) => {
    e.preventDefault();
    setStep((prevStep) => prevStep + 1); // Go to the next step
  };

  const handleSubmit = async () => {
    try {
      // Send POST request with the form data
      const response = await axios.post(
        "http://43.200.1.120/api/start",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      handleChange({
        target: { name: "isStart", value: response.data.result.isStart || 0 },
      });
      handleChange({
        target: {
          name: "username",
          value: response.data.result.username || "",
        },
      });
      handleChange({
        target: {
          name: "worldview",
          value: response.data.result.worldview || "세계관이 없습니다.",
        },
      });
      handleChange({
        target: {
          name: "charsetting",
          value: response.data.result.charsetting || "성격 설정이 없습니다.",
        },
      });
      handleChange({
        target: {
          name: "aim",
          value: response.data.result.aim || "목표가 설정되지 않았습니다.",
        },
      });
      handleChange({
        target: { name: "life", value: response.data.result.life || "0" },
      });
      handleChange({
        target: {
          name: "inventory",
          value: response.data.result.inventory || {},
        },
      });
      handleChange({
        target: { name: "isfull", value: response.data.result.isfull || false },
      });
      handleChange({
        target: {
          name: "playlog",
          value: response.data.result.playlog || "플레이 로그가 없습니다.",
        },
      });
      handleChange({
        target: { name: "gptsays", value: response.data.result.gptsays || "" },
      });
      handleChange({
        target: {
          name: "selectedchoice",
          value: response.data.result.selectedchoice || "",
        },
      });

      // choices도 handleChange로 업데이트
      handleChange({
        target: {
          name: "choices.first",
          value: response.data.result.choices?.first || "",
        },
      });
      handleChange({
        target: {
          name: "choices.second",
          value: response.data.result.choices?.second || "",
        },
      });
      handleChange({
        target: {
          name: "choices.third",
          value: response.data.result.choices?.third || "",
        },
      });

      handleChange({
        target: {
          name: "imageurl",
          value: response.data.result.imageurl || "",
        },
      });
      console.log({ formData });
      console.log({ response });

      setCurrentPage("mainpage"); // Redirect to MainPage after successful response
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

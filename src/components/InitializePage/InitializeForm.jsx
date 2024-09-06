import React, { useState } from "react";
import "./InitializeForm.css";

const InitializeForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    username: "",
    worldview: "",
    charsetting: "",
    aim: "",
    choices: [],
    selectedchoice: null,
    status: [],
    life: 3,
    inventory: [
      ["knife", 1],
      ["stone", 2],
    ],
    isfull: false,
    playlog: null,
    gptsays: null,
    isStart: null, // 0이면 진행중, 1이면 시작
  });

  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirmation(true); // Show confirmation before submission
  };

  const confirmSubmit = () => {
    setShowConfirmation(false);
    if (onSubmit) {
      onSubmit(formData); // Pass the form data to the parent if confirmed
    }
  };

  const cancelSubmit = () => {
    setShowConfirmation(false); // Hide confirmation if canceled
  };

  return (
    <>
      <form className="form-container" onSubmit={handleSubmit}>
        당신의 이름은 무엇인가요?
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="제 이름은..."
        />
        당신의 세계관은 어떤가요?
        <input
          type="text"
          name="worldview"
          value={formData.worldview}
          onChange={handleChange}
          placeholder="제가 살고 있는 세계는..."
        />
        당신의 성격은 어떤가요?
        <input
          type="text"
          name="charsetting"
          value={formData.charsetting}
          onChange={handleChange}
          placeholder="제 성격은..."
        />
        당신의 목표는 무엇인가요?
        <input
          type="text"
          name="aim"
          value={formData.aim}
          onChange={handleChange}
          placeholder="제가 이루고 싶은 것은..."
        />
        <button type="submit" className="button">
          당신의 이야기를 들려주세요
        </button>
      </form>

      {showConfirmation && (
        <div className="confirmation-modal">
          <p>이 이야기가 당신의 이야기가 맞나요?</p>
          <div>
            <p>이름: {formData.username}</p>
            <p>세계관: {formData.worldview}</p>
            <p>성격: {formData.charsetting}</p>
            <p>목표: {formData.aim}</p>
          </div>
          <button onClick={confirmSubmit} className="button">
            네
          </button>
          <button onClick={cancelSubmit} className="button cancel">
            아니오
          </button>
        </div>
      )}
    </>
  );
};

export default InitializeForm;

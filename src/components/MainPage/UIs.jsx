import React, { useState } from "react";
import "./UIs.css";
import InventoryModal from "./InventoryModal";
import BoxIcon from "../../assets/Icons/BoxIcon.svg";
import HeartIcon from "../../assets/Icons/HeartIcon.svg";

const UIs = ({ formData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="UI_contents">
      <img src={BoxIcon} className="box_icon" onClick={toggleModal} />
      <div className="heart_icons">
        {Array(Math.max(0, Math.floor(formData.life))) // healthpoint가 음수일 경우 0으로 처리
          .fill()
          .map((_, index) => (
            <img
              key={index}
              src={HeartIcon}
              alt="Heart Icon"
              className="heart_icon"
            />
          ))}
      </div>
      {isModalOpen && (
        <InventoryModal
          inventory={formData.inventory || []} // If inventory is null, pass an empty array
          closeModal={toggleModal}
        />
      )}
    </div>
  );
};

export default UIs;

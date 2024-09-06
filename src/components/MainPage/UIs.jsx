import React, { useState } from "react";
import "./UIs.css";
import InventoryModal from "./InventoryModal";
import BoxIcon from "../../assets/Icons/BoxIcon.svg";
import HeartIcon from "../../assets/Icons/HeartIcon.svg";

const UIs = ({ healthpoint, inventory }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="UI_contents">
      <img src={BoxIcon} className="box_icon" onClick={toggleModal} />
      <div className="heart_icons">
        {Array(Math.floor(healthpoint))
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
        <InventoryModal inventory={inventory} closeModal={toggleModal} />
      )}
    </div>
  );
};

export default UIs;

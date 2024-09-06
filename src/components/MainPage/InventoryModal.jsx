import React from "react";
import "./InventoryModal.css";

const InventoryModal = ({ inventory, closeModal }) => {
  return (
    <div className="inventory_modal">
      <button onClick={closeModal} className="close_button">
        닫기
      </button>
      {inventory.length === 0 ? (
        <p>인벤토리에 아무것도 없습니다.</p> // Display message when inventory is empty
      ) : (
        <ul>
          {inventory.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InventoryModal;

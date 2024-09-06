import React from "react";
import "./InventoryModal.css";

const InventoryModal = ({ inventory, closeModal }) => {
  return (
    <div className="modal_overlay" onClick={closeModal}>
      <div className="modal_content" onClick={(e) => e.stopPropagation()}>
        <h4 className="Inventory_text">Inventory</h4>
        <ul>
          {inventory.map(([item, count], index) => (
            <li key={index} className="Li">
              {item}: {count}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InventoryModal;

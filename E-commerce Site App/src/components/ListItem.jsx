import React from "react";

function ListItem({ item, removeItem, handleUpdate }) {
  return (
    <li className="list-item">
      {/* Display product thumbnail */}
      <img
        src={item.thumbnail || "https://via.placeholder.com/150"} // Fallback image
        alt={item.title}
        className="list-item-image"
      />

      {/* Display product details */}
      <div className="list-item-details">
        <strong>{item.title}</strong> - ${item.price.toFixed(2)}
        <span
          className={`stock-status ${
            item.stock > 10 ? "high-stock" : "low-stock"
          }`}
        >
          {item.stock > 10 ? "(High Stock)" : "(Low Stock)"}
        </span>
      </div>

      {/* Action buttons */}
      <button className="delete-button" onClick={() => removeItem(item.id)}>
        Delete
      </button>
      <button className="update-button" onClick={() => handleUpdate(item)}>
        Update
      </button>
    </li>
  );
}

export default ListItem;

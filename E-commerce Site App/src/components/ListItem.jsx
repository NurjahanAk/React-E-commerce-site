import React from "react";
import { Link } from "react-router-dom";

function ListItem({ item, removeItem, handleUpdate }) {
  return (
    <li className="list-item">
      {/* Link to the item details page */}
      <Link to={`/item/${item.id}`} className="list-item-link">
        <img
          src={item.thumbnail || "https://via.placeholder.com/150"} // Fallback image
          alt={item.title}
          className="list-item-image"
        />
      </Link>

      {/* Display product details */}
      <div className="list-item-details">
        <Link to={`/item/${item.id}`} className="list-item-link">
          <strong>{item.title}</strong>
        </Link>
        - ${item.price.toFixed(2)}
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

import React from "react";
import { useParams } from "react-router-dom";

function ItemDetailsPage({ products }) {
  const { id } = useParams();
  const item = products.find((item) => item.id === parseInt(id));

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div className="item-details">
      {/* Display the first image from the images array */}
      {item.images && item.images.length > 0 ? (
        <img
          src={item.images[0]} // Display the first image
          alt={item.title}
          className="item-details-image"
        />
      ) : (
        <img
          src="https://via.placeholder.com/600" // fallback image
          alt="Placeholder"
          className="item-details-image"
        />
      )}

      {/* Display product details */}
      <h1>{item.title}</h1>
      <p>
        <strong>Description:</strong> {item.description}
      </p>
      <p>
        <strong>Price:</strong> ${item.price.toFixed(2)}
      </p>
      <p>
        <strong>Stock:</strong>{" "}
        <span className={item.stock > 10 ? "high-stock" : "low-stock"}>
          {item.stock > 10 ? "High Stock" : "Low Stock"}
        </span>
      </p>
    </div>
  );
}

export default ItemDetailsPage;

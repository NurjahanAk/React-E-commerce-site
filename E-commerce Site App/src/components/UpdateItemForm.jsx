import React, { useState, useEffect } from "react";

function UpdateItemForm({ item, setProducts, onClose }) {
  const [title, setTitle] = useState(item.title);
  const [price, setPrice] = useState(item.price);
  const [description, setDescription] = useState(item.description);
  const [stock, setStock] = useState(item.stock);
  const [image, setImage] = useState(item.image);

  // Sync state with the `item` prop when it changes
  useEffect(() => {
    setTitle(item.title);
    setPrice(item.price);
    setDescription(item.description);
    setStock(item.stock);
    setImage(item.image);
  }, [item]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation for empty fields
    if (!title || !price || !description || stock === "") {
      alert("Please fill in all fields.");
      return;
    }

    // Create the updated item object
    const updatedItem = {
      ...item, // Include all existing properties, including id
      title: title,
      price: parseFloat(price), // Ensure price is a number
      description: description,
      stock: parseInt(stock, 10), // Ensure stock is an integer
      image: image,
    };

    // Update the products list
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === item.id ? updatedItem : product
      )
    );

    // Close the form
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>

      <label>
        Price:
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>

      <label>
        Description:
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>

      <label>
        Stock:
        <input
          type="number"
          placeholder="Stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        />
      </label>

      <label>
        Image URL:
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </label>

      <button type="submit">Update Item</button>
      <button type="button" onClick={onClose}>
        Cancel
      </button>
    </form>
  );
}

export default UpdateItemForm;

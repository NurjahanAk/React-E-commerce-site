import React, { useState } from "react";

function AddItemForm({ setProducts }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !price || !description || stock === "") {
      alert("Please fill in all fields.");
      return;
    }

    setProducts((prevProducts) => {
      const existingIds = prevProducts.map((product) => product.id);
      const newID = existingIds.length > 0 ? Math.max(...existingIds) + 1 : 1;

      const newItem = {
        id: newID,
        title: title,
        price: parseFloat(price),
        description: description,
        stock: parseInt(stock, 10),
      };

      return [...prevProducts, newItem];
    });

    setTitle("");
    setPrice("");
    setDescription("");
    setStock(0);
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

      <button type="submit">Add Item</button>
    </form>
  );
}

export default AddItemForm;

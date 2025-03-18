import React, { useState } from "react";
import AddItemForm from "../components/AddItemForm";
import List from "../components/List";
import UpdateItemForm from "../components/UpdateItemForm";

function DashboardPage({ products, setProducts, removeItem }) {
  const [updatingItem, setUpdatingItem] = useState(null);

  const handleUpdate = (item) => {
    setUpdatingItem(item);
  };

  const handleCloseUpdate = () => {
    setUpdatingItem(null);
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <AddItemForm setProducts={setProducts} />
      <List
        items={products}
        removeItem={removeItem}
        handleUpdate={handleUpdate}
      />
      {updatingItem && (
        <UpdateItemForm
          item={updatingItem}
          setProducts={setProducts}
          onClose={handleCloseUpdate}
        />
      )}
    </div>
  );
}

export default DashboardPage;

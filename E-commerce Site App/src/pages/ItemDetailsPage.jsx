import React from 'react';
import { useParams } from 'react-router-dom';

function ItemDetailsPage({ products }) { // Receive products as a prop
  const { id } = useParams();
  const item = products.find((item) => item.id === parseInt(id));

  if (!item) {
    return <div>Oops, Item not found</div>;
  }

  return (
    <div>
      <h1>{item.title}</h1>
      <p>Description: {item.description}</p>
      <p>Price: {item.price}</p>
      <p>Stock: {item.stock}</p>
    </div>
  );
}

export default ItemDetailsPage;


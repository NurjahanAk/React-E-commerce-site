import React from "react";
import ListItem from "./ListItem";

function List({ items, removeItem }) {
  return (
    <ul>
      {items.map((item) => (
        <ListItem key={item.id} item={item} removeItem={removeItem} />
      ))}
    </ul>
  );
}

export default List;

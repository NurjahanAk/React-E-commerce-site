// list

import React from "react";
import ListItem from "./ListItem";

function List({ items, removeItem, handleUpdate }) {
  return (
    <ul className="list">
      {items.map((item) => (
        <ListItem
          key={item.id}
          item={item}
          removeItem={removeItem}
          handleUpdate={handleUpdate}
        />
      ))}
    </ul>
  );
}

export default List;

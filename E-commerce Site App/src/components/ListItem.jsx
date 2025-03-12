import React from 'react';

function ListItem({item,removeItem}){
return (
    <li>
        {item.title} - ${item.price}
        {item.stock > 10 ? ' (High Stock' : '(Low Stock)'}
        <button onClick={() => removeItem(item.id) }>Delete</button>
    </li>
);
}

export default ListItem;
import React from 'react';
import {useParams} from 'react-router-dom';
import productsData from '../data/products.json';

function ItemDetailsPage() {
    const {id} = useParams();
    const item = productsData.products.find((item) => item.id === parseInt(id));

    if (!item) {
        return <div> Oops, Item not found</div>;
    }

    return (
        <div>
            <h1>{item.name}</h1>
            <p>Description: {item.description}</p>
           <p>Price: {item.price}</p>
           <p>Stock: {item.stock}</p>
        </div>
    );
}

export default ItemDetailsPage;


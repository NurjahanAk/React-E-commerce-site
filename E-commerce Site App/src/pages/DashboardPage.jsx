import React from "react";
import { Link } from "react-router-dom";
import productsData from "../data/products.json";

function DashboardPage() {
  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        {productsData.products.map((item) => (
          <li key={item.id}>
            <Link to={`/item/${item.id}`}> {item.name} </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DashboardPage;

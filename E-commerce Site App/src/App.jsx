import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import List from "./components/List";
import productsData from "./data/products.json";
import "./app.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [data, setData] = useState(productsData.products);

  console.log("productsData:", productsData);
  console.log("productsData.products:", productsData.products);
  console.log("data:", data);

  const changePage = (page) => {
    setCurrentPage(page);
  };

  const removeItem = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  let content;
  if (currentPage === "home") {
    content = (
      <div>
        {" "}
        <h1>Home Page Content</h1>
        <List items={data} removeItem={removeItem} />
      </div>
    );
  } else if (currentPage === "about") {
    content = <h1>About Page Content</h1>;
  }
  return (
    <div className="app-container">
      <Navbar />
      <div className="content-area">
        <Sidebar changePage={changePage} />
        <main>{content}</main>
      </div>
      <Footer />
    </div>
  );
}

export default App;

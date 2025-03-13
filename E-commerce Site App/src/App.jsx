import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import DashboardPage from "./pages/DashboardPage";
import ItemDetailsPage from "./pages/ItemDetailsPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import productsData from "./data/products.json";
import "./app.css";

function App() {
  const [data, setData] = useState(productsData.products);

  const removeItem = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="content-area">
          <Sidebar />
          <main>
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/item/:id" element={<ItemDetailsPage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
export default App;

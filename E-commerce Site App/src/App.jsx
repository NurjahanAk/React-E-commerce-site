import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
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
  // State to manage the list of products
  const [data, setData] = useState(productsData);

  // Function to remove an item from the list
  const removeItem = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };

  return (
    <Router>
      <div className="app-container">
        {/* Navbar */}
        <Navbar />

        <div className="content-area">
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <main>
            <Routes>
              {/* Dashboard Page */}
              <Route
                path="/"
                element={
                  <DashboardPage
                    products={data}
                    setProducts={setData}
                    removeItem={removeItem}
                  />
                }
              />

              {/* Item Details Page */}
              <Route
                path="/item/:id"
                element={<ItemDetailsPage products={data} />}
              />

              {/* About Page */}
              <Route path="/about" element={<AboutPage />} />

              {/* Not Found Page */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const changePage = (page) => {
    setCurrentPage(page);
  };

  let content;
  if (currentPage === "home") {
    content = <h1>Home Page</h1>;
  } else if (currentPage === "about") {
    content = <h1>About Page</h1>;
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

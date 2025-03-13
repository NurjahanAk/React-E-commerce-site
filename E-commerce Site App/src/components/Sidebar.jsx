import React from "react";
import { Link } from "react-router-dom";

function Sidebar(changePage) {
  return (
    <aside className="sidebar">
      <ul>
        <li>
          <Link to="/">
            <button className="sidebar-button">Dashboard</button>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <button className="sidebar-button">About</button>
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;

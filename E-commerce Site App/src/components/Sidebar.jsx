import React from "react";

function Sidebar(changePage) {
  return (
    <aside className="sidebar">
      <ul>
        <li>
          <button onClick={() => changePage ("home")} className="sidebar-button">
            Home
          </button>
        </li>
        <li>
          <button onClick={() => changePage ("about")} className="sidebar-button">
            About
          </button>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
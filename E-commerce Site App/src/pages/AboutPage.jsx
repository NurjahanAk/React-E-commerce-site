import React from "react";

function AboutPage() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>About This Project</h1>
      <p>
        This is a React E-commerce app built as part of the Ironhack curriculum
        (Mini-Project).
      </p>
      <h2>Team Members</h2>
      <ul>
        <li>
          <strong>John Doe</strong> -{" "}
          <a href="https://github.com/johndoe12345">GitHub</a> |{" "}
          <a href="https://linkedin.com/in/johndoe12345">LinkedIn</a>
        </li>
        <li>
          <strong>Jane Doe</strong> -{" "}
          <a href="https://github.com/janedoe12345">GitHub</a> |{" "}
          <a href="https://linkedin.com/in/janedoe12345">LinkedIn</a>
        </li>
      </ul>
    </div>
  );
}

export default AboutPage;

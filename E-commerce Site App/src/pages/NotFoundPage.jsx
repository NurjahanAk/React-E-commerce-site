import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="not-found-page">
      <h1>404 - Page Not Found</h1>
      <p>Oops.. the page you are looking for does not exist.</p>
      <Link to="/" className="back-to-home">
        Go Back to Homepage
      </Link>
    </div>
  );
}

export default NotFoundPage;

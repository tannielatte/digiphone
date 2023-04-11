import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container py-5">
      <h1 className="text-danger">Page 404</h1>
      <p className="lead muted mb-5">Page not found</p>
      <Link to="/" className="text-decoration-none bg-success text-light px-2 py-3 rounded-2 mb-5">
        Go back to the homepage
      </Link>
    </div>
  );
}

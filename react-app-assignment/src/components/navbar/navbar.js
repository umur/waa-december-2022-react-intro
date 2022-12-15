import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="d-flex justify-content-center flex-nowrap">
      <div className="btn-group">
        <Link
          to="/products"
          className="btn btn-default border border-secondary"
        >
          Products
        </Link>
        <Link
          to="/categories"
          className="btn default-info border border-secondary"
        >
          Categories
        </Link>
      </div>
      <input
        className="btn btn-danger ml-auto"
        type="button"
        value="Back"
        onClick={() => navigate(-1)}
      />
    </div>
  );
}

export default Navbar;

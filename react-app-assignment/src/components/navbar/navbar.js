import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="d-flex bg-info pt-0 pb-0">
      <Link to="/products" className="btn p-2">
        Products
      </Link>
      <Link to="/categories" className="btn p-2">
        Categories
      </Link>
      <input className="ml-auto p-2" type="button" value="Back" onClick={() => navigate(-1)} />
    </div>
  );
}

export default Navbar;

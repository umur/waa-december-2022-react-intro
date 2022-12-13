import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="d-flex bg-info p-5 pt-0 pb-0">
      <Link to="/products" className="btn active">Products</Link>
      <Link to="#" className="btn">Categories</Link>
    </div>
  );
}

export default Navbar;

import React from "react";
import ProductList from "./ProductList";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

export default function Product(props) {
  return (
    <div>
      <h2>Products</h2>
      <ProductList />
      <Outlet />
      <Link className="btn btn-primary" to="add">
        Add Product
      </Link>
    </div>
  );
}

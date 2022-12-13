import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductList from "./ProductList";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

export default function Product(props) {
  const requestUri = "/products";

  const [productsState, setProductState] = useState([]);

  async function getProducts() {
    let products = await axios.get(requestUri);
    console.log(products);
    setProductState(products.data);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <ProductList products={productsState} />
      <Outlet />
      <Link className="btn btn-primary" to="add">Add Products</Link>
    </div>
  );
}

import React from "react";
import { Outlet } from "react-router";

function SharedProduct() {
  return (
    <>
      <h2>Products</h2>
      <Outlet></Outlet>
    </>
  );
}

export default SharedProduct;

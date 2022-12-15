import React from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import CategoryList from "./CategoryList";

export default function Category(props) {
  
  return (
    <div>
      <h2>Categories</h2>
      <CategoryList />
      <Outlet />
      <Link className="btn btn-primary" to="add">Add Category</Link>
    </div>
  );
}

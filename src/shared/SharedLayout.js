import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

function SharedLayout() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  );
}

export default SharedLayout;

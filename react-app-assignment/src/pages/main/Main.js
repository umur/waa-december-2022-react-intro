import React from "react";
import { Outlet } from "react-router";
import Navbar from "../../components/navbar/navbar"

function Main() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Main;

import React from 'react';
import logo from './logo.svg';
import LoginPage from "./page/login/LoginPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import Home from "./page/home/Home";
import Products from "./page/products/Product";
import NavItems from "./components/NavItems";
function App() {
  return (
    <>
      <NavItems />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;

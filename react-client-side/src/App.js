import React from 'react';
import Home from './components/home';
import Login from './components/login';
import AddProduct from './components/AddProduct';
import axios from 'axios';
import Signup from './components/signup';
import EditProduct from './components/EditProduct';
import { Route, Routes } from 'react-router';

function App() {
  axios.defaults.baseURL = 'http://localhost:8080';
  axios.defaults.headers.delete['Access-Control-Allow-Origin'] =
    'http://localhost:8080';
  axios.defaults.headers.delete['Content-Type'] = 'application/json';
  return (
    <div className="App">
      <Routes>
        <Route path="/products/edit/*" element={<EditProduct />} />
        <Route path="/products/addProduct" element={<AddProduct />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;

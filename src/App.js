import logo from './logo.svg';
import React from 'react';
import './App.css';
import Product from './Product';
import NavList from './NavList';
import User from './User';

function App() {
  return (
    <div className="App">
        <NavList/>
       
        {/* <Product name="Product 1" />

        <Product name="Product 2" /> */}

    </div>
  );
}

export default App;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, Route, Routes } from 'react-router-dom';
import Users from './entity/Users';
import UserDetail from './entity/UserDetail';
import Products from './entity/Products';


export const LangContext = React.createContext('default');


function App() {

  axios.defaults.baseURL = "http://localhost:8080";


  return (
    <div>
      <ul>
        <li>
          <Link to='/users' >Users</Link>
        </li>

        <li>
          <Link to='/products' >Products</Link>
        </li>

        <li>
          <Link to='/users/:id' >User</Link>
        </li>

        <li>
          <Link to='/products/:id' >Product</Link>
        </li>


      </ul>

      <div>


        <Routes>
          <Route path='/users' element={<Users />} />
          <Route path='/products' element={<Products />} />
          <Route path='/user-detail/:iduser' element={<UserDetail />} />
          <Route path='/product-detail/:idproduct' element={<ProductDetail />} />

        </Routes>

      </div>

    </div>

  )
}

export default App;

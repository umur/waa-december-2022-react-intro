import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import User from './components/User';
import Product from './components/Product';
import Category from './components/Category';
import Review from './components/Review';
import axios from 'axios';


function App() {
  axios.defaults.baseURL = "http://localhost:8082/api";
  
  return (
    <div>
      <ul class="nav nav-pills nav-fill">
        <li class="nav-item">
          <a class="nav-link " href="/product">Products</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/user">Users</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/review">Review</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/category">Category</a>
        </li>
      </ul>

      <Routes>
        <Route path="/users" element={<User />} />
        <Route path="/products" element={<Product />} />
        <Route path="/categories" element={<Category />} />
        <Route path="/reviews" element={<Review />} />

      </Routes>

    </div>


  );
}

export default App;

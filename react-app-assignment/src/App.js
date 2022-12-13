import axios from "axios";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Product from "./components/product/Product";
import ProductDetails from "./components/product/ProductDetails";
import { Routes, Route } from "react-router";
import AddProduct from "./components/product/AddProduct";
import UpdateProduct from "./components/product/UpdateProduct";

function App() {
  axios.defaults.baseURL = "http://localhost:8081";

  return (
    <div>
      <Navbar />
      <div className="p-5">
        <Routes>
          <Route path="/products">
            <Route index element={<Product />} />
            <Route path="detail/:productId" element={<ProductDetails />} />
            <Route path="update/:productId" element={<UpdateProduct />} />
            <Route path="add" element={<AddProduct />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;

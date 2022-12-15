import axios from "axios";
import "./App.css";
import Product from "./components/product/Product";
import ProductDetails from "./components/product/ProductDetails";
import { Routes, Route } from "react-router";
import AddProduct from "./components/product/AddProduct";
import UpdateProduct from "./components/product/UpdateProduct";
import Category from "./components/category/Category";
import UpdateCategory from "./components/category/UpdateCategory";
import AddCategory from "./components/category/AddCategory";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux";
import Main from "./pages/main/Main";

function App() {
  axios.defaults.baseURL = "http://localhost:8081";
  const token = useSelector((state) => state.authReducer.token);

  return (
    <div>
      <div className="p-5">
        <Routes>
          {token ? (
            <Route path="/"  element={<Main />}>
              <Route path="/products">
                <Route index element={<Product />} />
                <Route path="detail/:productId" element={<ProductDetails />} />
                <Route path="update/:productId" element={<UpdateProduct />} />
                <Route path="add" element={<AddProduct />} />
              </Route>
              <Route path="/categories">
                <Route index element={<Category />} />
                <Route path="update/:categoryId" element={<UpdateCategory />} />
                <Route path="add" element={<AddCategory />} />
              </Route>
            </Route>
          ) : <Route path="/"  element={<Login />} />}
        </Routes>
      </div>
    </div>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Register from './components/Register';
import Products from './components/Products';
import Login from "./components/Login";
import Users from "./components/Users";
import AddProduct from "./components/AddProduct";
import AddUser from "./components/AddUser";

const Routing = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/products" element={<Products />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/add-user" element={<AddUser />} />
            <Route path="/users" element={<Users />} />
        </Routes>
    )
}
export default Routing;
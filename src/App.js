import logo from "./logo.svg";
import "./App.css";
import Register from "./authentication/Register";
import Login from "./authentication/Login";
import SharedLayout from "./shared/SharedLayout";
import Home from "./components/Home";
import About from "./components/About";
import SharedProduct from "./shared/SharedProduct";
import Products from "./components/Products";
import SingleProduct from "./components/SingleProduct";
import { useState } from "react";
import ProtectedRoute from "./guard/ProtectedRoute";
import Dashboard from "./components/Dashboard";
import Error from "./error/Error";
import { Route, Routes } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="App">
      <Routes>
        <Route path="/register" element={<Register></Register>}></Route>

        {/* <Route path="/" element={<Login></Login>}></Route> */}
        <Route path="/" element={<SharedLayout></SharedLayout>}>
          <Route index element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/product" element={<SharedProduct></SharedProduct>}>
            <Route index element={<Products></Products>}></Route>
            <Route
              path=":productId"
              element={<SingleProduct></SingleProduct>}
            ></Route>
          </Route>

          <Route
            path="/login"
            element={<Login setUsers={setUser}></Login>}
          ></Route>
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute user={user}>
                <Dashboard user={user}></Dashboard>
              </ProtectedRoute>
            }
          ></Route>

          <Route path="*" element={<Error></Error>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

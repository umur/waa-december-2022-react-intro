import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Categories } from "./components/Categories";
import { Products } from "./components/Products";
import { Review } from "./components/Review";
// import { Roles } from "./components/Roles";
import Roles from "./components/Roles";
import Userdetails from "./components/Userdetails";
import { Users } from "./components/Users";

function App() {
  return (
    <div>
      <ul className="nav nav-pills">
        <li className="nav-item">
          <Link to="/users" className="nav-link active">
            User
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/role" className="nav-link">
            Role
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/review" className="nav-link">
            Review
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/product" className="nav-link">
            Product
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/category" className="nav-link">
            Category
          </Link>
        </li>
      </ul>

      <Routes>
        <Route path="/users" element={<Users />}> </Route>
        <Route path="/userdetails/:id" element={<Userdetails/>}></Route>
        <Route path="/role" element={<Roles />}></Route>
        <Route path="/review" element={<Review/>}></Route>
        <Route path="/product" element={<Products/>}></Route>
        <Route path="category" element={<Categories/>}></Route>
        
        {/* <Route path="/users" element={<Roles/>} ></Route> */}
      </Routes>

     
    </div>
  );
}

export default App;

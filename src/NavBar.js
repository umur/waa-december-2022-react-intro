import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Product from "./Product";
import Category from "./Category";
import Review from "./Review";
import User from "./User";
import Role from "./Role";
import UserDetails from "./UserDetails";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="/user" className="nav-link">
                User
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/role" className="nav-link">
                Role
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category" className="nav-link">
                Category
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/product" className="nav-link ">
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/review" className="nav-link ">
                Review
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/category" element={<Category />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/review" element={<Review />}></Route>
        <Route path="/role" element={<Role />}></Route>
        <Route path="/user" element={<User />}></Route>
        <Route path="/userdetails/:id" element={<UserDetails />}></Route>
      </Routes>
    </div>
  );
};

export default NavBar;

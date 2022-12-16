import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const accessToken = localStorage.getItem("accessToken");

  const logout = (event) => {
    event.preventDefault();
    localStorage.removeItem("accessToken");
    localStorage.clear();
    navigate("/login");
  };

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="bg-light-gray">
      {accessToken ? (
        <div className="top-bar">
          <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
            <span className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">
              WAA - Assignment
            </span>
            <div className="navbar-nav px-3">
              <div className="nav-item text-nowrap">
                <Link className="nav-link text-white pr-3" onClick={logout}>
                  <h4>
                    <i className="fa fa-power-off pt-2"></i>
                  </h4>
                </Link>
              </div>
            </div>
          </header>
          <div className="nav-scroller bg-body shadow-sm">
            <nav className="nav nav-underline" aria-label="Primary navigation">
              <Link className="nav-link" to={"/"}>
                Dashboard
              </Link>
              <Link className="nav-link" to={"/products"}>
                Product
              </Link>
              <Link className="nav-link" to={"/categories"}>
                Category
              </Link>
              <Link className="nav-link" to={"/addresses"}>
                Address
              </Link>
              <Link className="nav-link" to={"/reviews"}>
                Reviews
              </Link>
            </nav>
          </div>
        </div>
      ) : (
        <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
          <span className="navbar-brand col-md-3 col-lg-2 me-0 px-3 p-3" href="#">
            WAA - Assignment
          </span>
        </header>
      )}
    </div>
  );
};

export default Header;

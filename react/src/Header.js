import React,{useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Header() {
  const navigate=useNavigate();
  function logout(){
    localStorage.clear();
    
    navigate("/login")
  }

  useEffect(() => {
   if(!localStorage.getItem("accessToken")){
    navigate("/login");
   }
  }, []);
  const accessToken = localStorage.getItem("accessToken");
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <Link className="navbar-brand text-white" to={"/"}>Home</Link>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        { 
      
          accessToken ?
            <ul className="navbar-nav mr-auto text-white navmenu" >

              <li className="nav-item">
                <Link className="nav-link text-white" to={"/products"}>Product</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to={"/categories"}>Category</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to={"/addresses"}>Address</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-white" to={"/reviews"}>Reviews</Link>
              </li>

              <li className="nav-item">
                <Link 
                className="nav-link text-white" 
                to="" onClick={logout}>Log Out</Link>
              </li>
            </ul>


            :
            <ul className="navbar-nav mr-auto text-white navmenu">

              <li className="nav-item">
                <Link className="nav-link text-white" to={"/signup"}>Register</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to={"/login"}>Login</Link>
              </li>

            </ul>

        }

      </div>
    </nav>

  )
}

export default Header
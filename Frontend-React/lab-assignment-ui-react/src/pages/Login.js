import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/authenticate", inputs);

      localStorage.setItem("accessToken", response.data.accessToken);
      navigate("/products");
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container py-5 h-100">
      <div className="row justify-content-center align-items-center h-100">
        <div className="col-12 col-lg-9 col-xl-7">
          <div className="card shadow-2-strong card-registration">
            <div className="card-body p-4 p-md-5">
              <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Login Form</h3>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-12 mb-4 d-flex align-items-center">
                    <div className="form-outline datepicker w-100">
                      <label className="form-label" htmlFor="email">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control form-control-lg"
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 mb-4 pb-2">
                    <div className="form-outline">
                      <label className="form-label" htmlFor="password">
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        className="form-control form-control-lg"
                        onChange={handleChange}
                        placeholder="Enter your password"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <input className="btn btn-primary btn-md" type="submit" />
                </div>

                <div className="mt-3">
                  <p>
                    <label className="p-1">Not a member?</label>
                    <Link
                      as={Link}
                      to="/signup"
                      className="mb-4 pb-2 pb-md-0 mb-md-5"
                    >
                      Signup
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

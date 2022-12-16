import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const Signup = () => {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const onSignUpCancelled = () => {
    navigate("/login");
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/signup", inputs);
      toast.success("User Registration Successful", {
        autoClose: 1000,
      });
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("accessToken") != null) {
      navigate("/products");
    }
  }, []);
  return (
    <div className="container py-5 h-100">
      <div className="row justify-content-center align-items-center h-100">
        <div className="col-12 col-lg-9 col-xl-7">
          <div className="card shadow-2-strong card-registration">
            <div className="card-body p-4 p-md-5">
              <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <label className="form-label" for="firstName">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="form-control form-control-lg"
                        onChange={handleChange}
                        placeholder="First Name"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <label className="form-label" for="lastName">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="form-control form-control-lg"
                        onChange={handleChange}
                        placeholder="Last Name"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 mb-4 d-flex align-items-center">
                    <div className="form-outline datepicker w-100">
                      <label className="form-label" for="email">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control form-control-lg"
                        onChange={handleChange}
                        placeholder="Email"
                        readOnly
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-4 pb-2">
                    <div className="form-outline">
                      <label className="form-label" for="password">
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        className="form-control form-control-lg"
                        onChange={handleChange}
                        placeholder="Password"
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="col-md-6 mb-4 pb-2">
                    <div className="form-outline">
                      <label className="form-label" for="confirmPassword">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        className="form-control form-control-lg"
                        onChange={handleChange}
                        placeholder="Confirm Password"
                        readOnly
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-2">
                  <input
                    className="btn btn-primary btn-md"
                    type="submit"
                    value="Sign Up"
                  />
                  <input
                    className="btn btn-secondary btn-md"
                    type="button"
                    value="Cancel"
                    onClick={() => onSignUpCancelled()}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import customFetch from "../utils/axios";
import { adduserToLocalStorage } from "../utils/localStorage";
const initialState = {
  email: "",
  password: "",
};

function Login({ setUsers }) {
  const navigate = useNavigate();
  const [values, setValues] = useState(initialState);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const user = { ...values, [name]: value };
    setValues(user);
    console.log(user);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
    try {
      const response = await customFetch.post("/auth/login", values);
      console.log(response.data);
      setUsers(response.data.user);
      adduserToLocalStorage(response.data.user);
      navigate("/dashboard");
    } catch (error) {
      console.log(error.response);
    }
    setValues(initialState);
  };
  return (
    // <Wrapper className="full-page">
    <section className="section">
      <form className="form" onSubmit={onSubmit}>
        <h3>Login...</h3>

        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="text"
            id="email"
            value={values.email}
            name="email"
            onChange={handleChange}
            className="form-control form-input"
          />
        </div>

        <div className="form-row">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={values.password}
            name="password"
            onChange={handleChange}
            className="form-control form-input"
          />
        </div>

        <button type="submit" className="btn btn-block">
          Login
        </button>
        <div>
          Don't have an account?
          <Link className="signup-link" to="/register">
            Sign Up
          </Link>
        </div>
      </form>
    </section>

    // </Wrapper>
  );
}

export default Login;

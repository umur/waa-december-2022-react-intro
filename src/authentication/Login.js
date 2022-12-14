import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser, registerUser } from "../features/user/userSlice";
import customFetch from "../utils/axios";
import { adduserToLocalStorage } from "../utils/localStorage";
const initialState = {
  email: "",
  password: "",
};

function Login({ setUsers }) {
  const dispatch = useDispatch();
  const { isLoading, user } = useSelector((state) => state.user);

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  });
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
    //Check if the userinput data is empyt valid or not
    // try {
    //   const response = await customFetch.post("/auth/login", values);
    //   console.log(response.data);
    //   setUsers(response.data.user);
    //   adduserToLocalStorage(response.data.user);
    //   navigate("/dashboard");
    // } catch (error) {
    //   console.log(error.response);
    // }
    dispatch(loginUser(values));

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
          {isLoading ? "Loading..." : "Login"}
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

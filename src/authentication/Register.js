import React, { useState } from "react";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterPage";
import customFetch from "../utils/axios";
const url = "https://jobify-prod.herokuapp.com/api/v1/toolkit";

const initialState = {
  name: "",
  email: "",
  password: "",
};

function Register() {
  const [values, setValues] = useState(initialState);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const user = { ...values, [name]: value };

    setValues(user);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("val  ...", values);
    if (!values.email || !values.password || !values.name) {
      console.log("please filled out all fields");
      return;
    }
    console.log(".....->");
    try {
      const response = await customFetch.post("/auth/register", values);
      console.log(response.data);
    } catch (error) {
      console.log(error.response);
    }
    setValues(initialState);
  };

  // const toggleMember = () => {
  //   setValues({ ...values, isMember: !values.isMember });
  // };

  return (
    // <Wrapper className="full-page">
    <section className="section">
      <form className="form" onSubmit={onSubmit}>
        <h3>{values.isMember ? "Login" : "Registration"}</h3>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={values.name}
            name="name"
            onChange={handleChange}
            className="form-control form-input"
          />
        </div>

        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            type="text"
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
          Submit
        </button>
        <div>
          <Link className="signup-link" to="/">
            Back
          </Link>
        </div>
      </form>
    </section>

    // </Wrapper>
  );
}

export default Register;

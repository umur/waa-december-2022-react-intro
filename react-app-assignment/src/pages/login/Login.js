import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAuth } from "../../redux/authReducer";
import { setEmail, setPassword } from "../../redux/loginReducer";

function Login() {
  const loginState = useSelector((state) => state.loginReducer);
  const dispatch = useDispatch();

  const onEmailChanged = (event) => {
    dispatch(setEmail(event.target.value));
  };

  const onPasswordChanged = (event) => {
    dispatch(setPassword(event.target.value));
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    dispatch(getAuth(loginState));

  };

  return (
    <form className="w-50 mx-auto" onSubmit={onFormSubmit}>
      <h3>Login</h3>
      <div className="form-group">
        <label htmlFor="name">Email</label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={loginState.email}
          onChange={onEmailChanged}
          placeholder="Enter email"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="name">Password</label>
        <input
          type="password"
          className="form-control"
          id="name"
          name="name"
          value={loginState.password}
          onChange={onPasswordChanged}
          placeholder="Enter password"
          required
        />
      </div>
      <input type="submit" className="btn btn-primary m-1" value="Login" />
    </form>
  );
}

export default Login;

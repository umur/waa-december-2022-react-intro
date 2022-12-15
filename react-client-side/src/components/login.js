import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import '../css/login.css';
import { useDispatch, useSelector } from 'react-redux';
import { setToken, setRefreshToken } from '../redux/TokenReducer';

export default function LoginForm(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const tokenVal = useSelector((state) => state.TokenReducer.tokenVal);

  
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [message, setMessage] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    const postLogin = () => {
      const postResponse = axios
        .post('/login', data)
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            setMessage('Login successful');
            console.log(response.data.token);
            dispatch(setToken(response.data.token));
            console.log(tokenVal);
            dispatch(setRefreshToken(response.data.refreshToken));
            setTimeout(() => navigate('/home'), 1000);
          }
        })
        .catch((error) => {
          console.log(error);
          setMessage(error.response.data);
          setTimeout(() => setMessage(''), 3000);
        });
    };
    postLogin();
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h1 className="Auth-main-title">Welcome to the Products Dashboard</h1>
          <h3 className=" text-primary Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              required
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button
              type="submit"
              className="btn btn-primary"

            >
              Submit
            </button>
          </div>
          <p className="mt-2">
            <Link to={'/signup'} className="text-decoration-none">
              Create Account
            </Link>
          </p>
          <div className="mt-2 text-center">
            <span className="text-secondary">{message}</span>
          </div>
        </div>
      </form>
    </div>
  );
}

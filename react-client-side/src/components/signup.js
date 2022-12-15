import React from 'react';
import axios from 'axios';
import '../css/login.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';

export default function Signup(props) {
  axios.defaults.baseURL = 'http://localhost:8080';
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [message, setMessage] = React.useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      username: username,
      email: email,
      password: password,
    };
    const postSignup = () => {
      const postResponse = axios
        .post('/signup', data)
        .then((response) => {
          if (response.status === 200) {
            setMessage('Signup successful, Navigating to login page');
            setTimeout(() => {
              navigate('/login');
            }, 2000);
          }
        })
        .catch((error) => {
          setMessage(error.response.data);
        });
    };
    postSignup();
  };

  return (
    <div className="Auth-form-container ">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content ">
          <h1 className="Auth-main-title">Welcome to the Products Dashboard</h1>
          <h3 className="Auth-form-title text-primary">Sign Up</h3>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              required
              type="username"
              className="form-control mt-1"
              placeholder="Enter username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              required
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
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
            <button type="submit" className=" btn btn-primary">
              Submit
            </button>
          </div>
          <p className="mt-2">
            <Link to={'/login'} className="text-decoration-none text-center ">
              Login
            </Link>
          </p>
          <div className="mt-2 text-center">
            <span className='text-secondary'>{message}</span>
          </div>
        </div>
      </form>
    </div>
  );
}

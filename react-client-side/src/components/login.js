import React from 'react';

export default function LoginForm(props) {

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  return (
    <main>
      <div className="container">
        <hr />
        <div className="row">
          <h3>Login</h3>
        </div>
        <hr />
        <form action="localhost:8080/login" method="post" id="loginForm">
          <div className="mb-3 row">
            <label htmlFor="username" className="col-sm-2 col-form-label">
              Username
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                name="username"
                id="username"
                required
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="password" className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                name="password"
                required
                id="password"
              />
            </div>
          </div>

          <div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
          <div className="justify-content-center d-flex align-content-center">
            <h4 className="text-warning" id="message"></h4>
          </div>
        </form>
      </div>
    </main>
  );
}

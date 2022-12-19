import React from 'react';

export default function Signup(props) {
  return (
    <main>
      <div className="container">
        <hr />
        <div className="row">
          <h3>Sign up Form</h3>
        </div>
        <hr />
        <form action="#" method="post" id="signupForm">
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
                placeholder="Input username"
                required
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="email" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="Input email"
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
                placeholder='Input password'
                required
                id="password"
              />
            </div>
          </div>

          <div>
            <button type="submit" className="btn btn-primary text-light">
              Sign Up
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

import React from 'react';
import home from './components/home.js';
import login from './components/login.js';
import navBar from './components/nav.js';
import signup from './components/signup.js';
import logo from './logo.svg';
function App() {
  let body;
  
  switch (window.location.pathname) {
    case '/home':
      body = home;
      break;
    case '/login':
      body = login;
      break;
    case '/signup':
      body = signup;
      break;
    default:
      body = home;
      break;
  }
  return (
    <div className="App">
      {navBar()}
      <div className="">{body()}</div>
    </div>
  );
}

export default App;

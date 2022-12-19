export default function navBar(props) {
  return (
    <div className="bg-primary">
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <a className="navbar-brand text-light">
         Products App
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav text-light">
          <li className="nav-item active">
            <a className="nav-link text-light" href="/home">
              Home{' '}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="/login">
              Login
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="/signup">
              Sign Up
            </a>
          </li>
         
        </ul>
      </div>
    </nav>
    </div>
  );
}

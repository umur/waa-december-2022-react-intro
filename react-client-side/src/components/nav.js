import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { setToken, setRefreshToken } from '../redux/TokenReducer';

export default function NavBar(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const tokenVal = useSelector((state) => state.TokenReducer.tokenVal);
  const refreshTokenVal = useSelector(
    (state) => state.TokenReducer.refreshTokenVal
  );

  const signOutClicked = () => {
    dispatch(setToken(''));
    console.log(tokenVal);
    dispatch(setRefreshToken(''));
    console.log(refreshTokenVal);
    navigate('/login');
  };

  return (
    <div className="bg-primary w-100">
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <span className="navbar-brand text-light">Products App</span>
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
        <div className="collapse navbar-collapse" id="navbarNav"></div>
        <div className="mr-3">
          <input
            onClick={signOutClicked}
            type="button"
            className="btn-light"
            value="Log Out"
          ></input>
        </div>
      </nav>
    </div>
  );
}

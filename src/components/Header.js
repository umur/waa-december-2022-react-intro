import jwtDecode from 'jwt-decode';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getUser, setHeaders, setIsAdmin, setIsLoggedIn } from '../redux/userReducer';
import '../style.css';

const Header = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const isAdminState = useSelector(state => state.userReducer.isAdmin);
    const isLoggedIn = useSelector(state => state.userReducer.isLoggedIn);

    const logOut = () => {
        localStorage.clear();
        navigate('/login');
        dispatch(setIsAdmin(false));
        dispatch(setIsLoggedIn(false));
    }

    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if(token) {
            const isAdmin = jwtDecode(token)['isAdmin'];
            dispatch(setIsAdmin(isAdmin));
            dispatch(setIsLoggedIn(true));
            dispatch(setHeaders(token));
            dispatch(getUser());
        }
    }, []);

    return(
        <div className='row header-container'>
            <div className='col-md-1 icon'>
                <h4>
                    <Link to="/">WAA</Link>
                </h4>
            </div>
            <div className='col-md-3 menus'>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                    {isAdminState && (<li>
                        <Link to="/users">Users</Link>
                    </li>)}
                </ul>    
            </div>
            {isLoggedIn && (
                <div className='col-md-3'>
                    <a className='log-out' onClick={logOut}>Log Out</a>
                </div>
            )}
        </div>
    );
}

export default Header;
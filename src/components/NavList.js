import { Link } from 'react-router-dom';
const NavList = (props) => {
    return (
        <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to={props.routeTo}>{props.navName}</Link>
        </li>
    );
}
export default NavList;
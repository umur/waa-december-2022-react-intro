import NavList from "../components/NavList";
import NavHeader from "../components/NavHeader";
const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <NavHeader></NavHeader>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <NavList navName="User" routeTo="/users"></NavList>
                            <NavList navName="Role" routeTo="/roles"></NavList>
                            <NavList navName="Review" routeTo="/reviews" ></NavList>
                            <NavList navName="Product" routeTo="/products"></NavList>
                            <NavList navName="addJobs" routeTo="/addjobs"></NavList>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
}
export default NavBar;
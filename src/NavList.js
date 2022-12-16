import {Link, Route, Routes} from 'react-router-dom';
import User from './User';
import Product from './Product';
import Role from './Role';
import UserDetails from './UserDetails';
import Reviews from './Review';


const NavList = () => {
    return (
        <div className="myNav">
            <h3>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#"></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Link to ="/users" class="nav-link" >User <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link to="/roles" class="nav-link" >Role</Link>
      </li>
      <li class="nav-item">
        <Link to="/products" class="nav-link" >Product</Link>
        
      </li>
      <li class="nav-item">
        <Link to="/reviews" class="nav-link" >Reviews</Link>
        
      </li>
    </ul>
  </div>
</nav>
            </h3>
            <Routes>
              <Route path='/users' element={<User/>} />
              <Route path='/products' element={<Product/>}/>
              <Route path='/roles' element={<Role/>}/>
              <Route path='/userdetails/:id' element={<UserDetails/>}></Route>

              <Route path='/reviews' element={<Reviews/>}/>
            </Routes>
        </div >
     );
}

export default NavList;
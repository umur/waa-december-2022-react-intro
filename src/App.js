
import './App.css';
import NavBar from "./components/NavBar";
import { Route, Routes } from 'react-router-dom';
import User from "./components/User";
import Role from './components/Role';
import Review from './components/Review';
import Product from './components/Product';
import { UserDetails } from "./components/UserDetails";



function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/users" element={<User></User>}></Route>
        <Route path="/users/:id" element={<UserDetails></UserDetails>}></Route>
        <Route path="/roles" element={<Role></Role>}></Route>
        <Route path="/reviews" element={<Review></Review>}></Route>
        <Route path="/products" element={<Product></Product>}></Route>
      </Routes>
    </div>


  );
}

export default App;

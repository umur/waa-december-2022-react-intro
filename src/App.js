
import './App.css';
import NavBar from "./components/NavBar";
import { Route, Routes } from 'react-router-dom';
import User from "./components/User";
import Role from './components/Role';
import Review from './components/Review';
import Product from './components/Product';
import { UserDetails } from "./components/UserDetails";
import AddJobs from './components/AddJob';
import React, { useState } from 'react';
import AddRole from './components/AddRole';

//=================== create context =================
export const lgContext = React.createContext()

function App() {
  //================================== change color function===========================
  const changeColor = (newColor) => {
    setTheme({ ...themState, color: newColor })
  }

  //=================initial state======================
  let initialState = {
    color: "navy",
    changeColor: changeColor
  }

  //================= create state ============================
  const [themState, setTheme] = useState(initialState);
  return (

    <div className="App">
      <lgContext.Provider value={themState}>
        <NavBar />

        <Routes>
          <Route path="/users" element={<User></User>}></Route>
          <Route path="/users/:id" element={<UserDetails></UserDetails>}></Route>
          <Route path="/roles" element={<Role></Role>}></Route>
          <Route path="/reviews" element={<Review></Review>}></Route>
          <Route path="/products" element={<Product></Product>}></Route>
          <Route path="/addjobs" element={<AddJobs></AddJobs>}></Route>
          <Route path="/addrole" element={<AddRole></AddRole>}></Route>
        </Routes>
      </lgContext.Provider>

    </div>


  );
}

export default App;

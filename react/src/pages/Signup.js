import React,{useState,useEffect} from 'react'
import axios from "axios"
import { useNavigate } from 'react-router';
import {toast} from 'react-toastify'
function Signup() {

  
  const [inputs, setInputs] = useState({});
  const navigate=useNavigate();
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }


  const handleSubmit = async(event) => {
    event.preventDefault();
    try {
      await axios.post(
        "http://localhost:8080/uaa/signup",
        inputs
      );
      toast.success("User Registration Successful", {
        autoClose: 1000,
      });
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }

  
  useEffect(() => {
    if(localStorage.getItem("accessToken")!=null){navigate("/products")}
   
  }, []);
  return (
    <div className="container ">

    <div className="col d-flex justify-content-center">
     
      <h2>Signup</h2>
     </div>
     <hr/>
      <form onSubmit={handleSubmit}>
      <div className="form-outline mb-4" >
   <label className="form-label" htmlFor="firstname">First Name</label>
     <input type="text"
      id="firstname" 
      className="form-control"
      name='firstname'
      onChange={handleChange}
      />
    
   </div>
   <div className="form-outline mb-4" >
   <label className="form-label" htmlFor="lastname">Last Name</label>
     <input type="lastname" 
     id="lastname" 
     className="form-control"
     name='lastname'
     onChange={handleChange} />
    
   </div>
   
   <div className="form-outline mb-4" >
   <label className="form-label" htmlFor="form1Example1">Email address</label>
     <input type="email" 
     id="form1Example1" 
     className="form-control"
     name='email'
     onChange={handleChange} />
    
   </div>
 
 
   <div className="form-outline mb-4">
   <label className="form-label" htmlFor="form1Example2">Password</label>
     <input type="password" id="form1Example2" className="form-control"
     name='password'
     onChange={handleChange} />
     
   </div>
 
   
   <div className="row mb-4">
     
 
     
   </div>
 
  
   <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
 </form>
    </div>
  )
}

export default Signup
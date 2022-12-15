import React,{useState,useEffect} from 'react'
import axios from "axios"
import { useNavigate } from 'react-router';
function Login() {
  const navigate=useNavigate();
  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = async(event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/uaa/login",
        inputs
      );
      
      localStorage.setItem("accessToken", response.data.accessToken);
       navigate("/products");
          console.log(response.data);
      
    } catch (error) {
      console.log(error);
    }
  }

  


  return (
    <div className="container ">

    <div className="col d-flex justify-content-center">
     
      <h2>Login</h2>
     </div>
     <hr/>
      <form onSubmit={handleSubmit}>
   
   <div className="form-outline mb-4" >
   <label className="form-label" htmlFor="form1Example1">Email address</label>
     <input type="email"
      id="form1Example1" 
      className="form-control"
      name='email'
      onChange={handleChange}
      
      />
    
   </div>
 
 
   <div className="form-outline mb-4">
   <label className="form-label" htmlFor="form1Example2">Password</label>
     <input type="password" 
     id="form1Example2" 
     className="form-control" 
     name='password'
     onChange={handleChange}
     />
     
   </div>
 
   
   <div className="row mb-4">
     
 
     
   </div>
 
  
   <button type="submit" className="btn btn-primary btn-block">Sign in</button>
 </form>
    </div>
    
  )
}

export default Login
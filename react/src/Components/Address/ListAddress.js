import React,{useState,useEffect} from 'react'
import axios from "axios";
import {Link} from 'react-router-dom'
function ListAddress() {
  const[addressList,setAddressList]=useState([]);
  async function fetchAddress() {
    const response = await axios.get("http://localhost:8080/address", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    setAddressList(response.data);
    
  }

  useEffect(() => {
    fetchAddress();
   
  }, []);


  return (
    <div className="container">
    <div className="d-flex justify-content-around">
    <h3>List of Address</h3>
    <hr/>
    <Link className="btn btn-primary" to={"/addAddress"}>Add Address</Link>
    </div>
    
    <table className="table">
<thead>
<tr>
    <th scope="col">#</th>
    <th scope="col">Street</th>
    <th scope="col">Zip</th>
    <th scope="col">City</th>
    <th scope="col">Action</th>
  </tr>
</thead>
<tbody>
{ addressList.map((item) => {
    return(
  
  <tr key={item.id}>
    <th scope="row">{item.id}</th>
    <td>{item.street}</td>
    <td>{item.zip}</td>
    
    <td>{item.city}</td>
    <td>
      <div className='d-flex justify-content-around '>
      <Link className="btn btn-info" to={`/updateAddress/${item.id}`}>Update</Link>
    <Link className="btn btn-danger" to={`/deleteAddress/${item.id}`}>Delete</Link>
      </div>
    


    </td>
  </tr>
    );})}

    
    
  
</tbody>
</table>



  </div>
  );
}

export default ListAddress
import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"


function ListProduct() {
  const[productList,setProductList]=useState([]);
async function fetchProducts(){
  const response=await axios.get("http://localhost:8080/products",
  {
    headers: {
      authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });

  setProductList(response.data);


}


async function handledelete(id) {
  try {
  await axios.delete(`http://localhost:8080/products/${id}`, {
    headers: {
      authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  setProductList(productList.filter((p) => p.id !== id));
}catch(error){
  console.log(error);
}
}



useEffect(() => {
  fetchProducts();
 
}, []);

  return (
    <div className="container">
      <div className="d-flex justify-content-around">
      <h3>List of Product</h3>
      <hr/>
      <Link className="btn btn-primary" to={"/addProduct"}>Add Product</Link>
      </div>
      
      <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Product Name</th>
      <th scope="col">Price</th>
      <th scope="col">Rating</th>
      <th scope="col">Category</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
      productList.map((product)=>{
        return(
        <tr key={product.id}>
        <th scope="row">{product.id}</th>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>{product.rating}</td>
        <td>{product.category.name}</td>
       
        <td>
          <div className='d-flex justify-content-around '>
          <Link className="btn btn-info" to={`/updateProduct/${product.id}`}>Update</Link>
        <Link className="btn btn-danger" onClick={()=>handledelete(product.id)}>Delete</Link>
        <Link className="btn btn-dark" to={`/productDetails/${product.id}`}>Details</Link>
          </div>
        
  
  
        </td>
      </tr>
        );
      })
    }
   
   
  </tbody>
</table>



    </div>
  )
}

export default ListProduct
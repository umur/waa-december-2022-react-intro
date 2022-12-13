import React,{useState,useEffect} from 'react'
import axios from "axios";
import { Link } from 'react-router-dom'
function ListCategory() {

const [categoryList,setCategoryList]=useState([])

  async function fetchCategories() {
    const response = await axios.get("http://localhost:8080/categories", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    setCategoryList(response.data);
  
  }

  async function handledelete(id) {
    try {
    await axios.delete(`http://localhost:8080/categories/${id}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    setCategoryList(categoryList.filter((category) => category.id !== id));
  }catch(error){
    console.log(error);
  }
  }

  useEffect(() => {
   fetchCategories();
   
  }, []);
  return (
    <div className="container">
      <div className="d-flex justify-content-around">
        <h3>List of Category</h3>
        <hr />
        <Link className="btn btn-primary" to={"/addCategory"}>Add Category</Link>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Category Name</th>

            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>

        { categoryList.map((category) => {
          return(
          <tr key={category.id}>
            <th scope="row">{category.id}</th>
            <td>{category.name}</td>

            <td>

              <Link className="btn btn-info" to={`/updateCategory/${category.id}`}>Update</Link>
              <Link className="btn btn-danger" onClick={()=>handledelete(category.id)}>Delete</Link>




            </td>
          </tr>

);
})}
        
        </tbody>
      </table>



    </div>
  )
}

export default ListCategory
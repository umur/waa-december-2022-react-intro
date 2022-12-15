import React,{useState,useEffect} from 'react'
import { Link, useNavigate ,useParams} from 'react-router-dom'
import axios from 'axios';
function AddProduct() {
  const navigate=useNavigate();
  const[categoryList,setCategoryList]=useState([]);
  let params =useParams();
  let title="Add Product";
  if(params.id){
    title="Update Product";
  }
  const [inputs, setInputs] = useState({
    name: "",
    price: null,
    rating: "",
    category: Object,

  });

  async function fetchCategories(){
    const response=await axios.get("http://localhost:8080/categories",
  {
    headers: {
      authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  setCategoryList(response.data);
  }

  async function fetchProduct(){
    const response=await axios.get(`http://localhost:8080/products/${params.id}`,
  {
    headers: {
      authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  setInputs(response.data);

  }



  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = async(event) => {
    event.preventDefault();
   
    try {
      const options={headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`
      }};

    if(params.id){
      console.log(inputs);
      await axios.put(`http://localhost:8080/products/${params.id}`,inputs,options);
    }
    else{
      inputs.category=JSON.parse(inputs.category);
      console.log(inputs);
      await axios.post("http://localhost:8080/products",inputs,options);
    }
    navigate("/products")
  }catch (error) {
    console.log(error);
  }
  }

  useEffect(() => {
    if(params.id){
      fetchProduct();
    }
   fetchCategories();
  
  }, [params.id]);



  return (
    <div className="container ">
      <div className="d-flex justify-content-around">
        <h3>{title}</h3>
        <Link className="btn btn-primary" to={"/products"}> Product</Link>
      </div>
    <hr/>      <div className="product-form ">
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="name">Product Name</label>
              <input 
              type="text" 
              className="form-control" 
              id="name" 
              placeholder="Enter Your Product Name"
              name='name'
              value={inputs.name||""}
              onChange={handleChange} />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="price">Price</label>
              <input type="number" 
              className="form-control"
               id="price" 
               step="1" 
               name='price'
               value={inputs.price||""}
               onChange={handleChange} />
            </div>
          </div>
          <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="rating">Rating</label>
            <input 
            type="text" 
            className="form-control" 
            id="rating" 
            name='rating'
            value={inputs.rating||""}
            onChange={handleChange} />
          </div>
          <div className="form-group col-md-6">
          <label htmlFor="inputState">Category</label>
              <select 
              id="inputState"
               className="form-control"
               name="category"
              value={JSON.stringify(inputs.category)}
               onChange={handleChange}
               readOnly
              >
                 <option value="none">
              ---------------------
            </option>
            {categoryList.map((item) => {
              return (
                <option
                 key={item.id} 
                 value={JSON.stringify(item)} 
                
                
                >
                  {item.name}
                </option>
              );
            })}



              </select>
          </div>

          </div>

          <button type="submit" className="btn btn-primary" id='button'>{title}</button>
        </form>
      </div>

    </div>

  )
}

export default AddProduct
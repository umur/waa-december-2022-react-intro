import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const AddProduct = () => {
  const navigate = useNavigate();
  const [categoryList, setCategoryList] = useState([]);

  let params = useParams();
  let title = "Add Product";

  if (params.id) {
    title = "Update Product";
  }

  const [inputs, setInputs] = useState({
    name: "",
    price: null,
    rating: "",
    category: Object,
  });

  async function fetchCategories() {
    const response = await axios.get("/categories", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    setCategoryList(response.data);
  }

  async function fetchProduct() {
    const response = await axios.get(`/products/${params.id}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    setInputs(response.data);
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const options = {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      };

      if (params.id) {
        console.log(inputs);
        await axios.put(`/products/${params.id}`, inputs, options);
      } else {
        inputs.category = JSON.parse(inputs.category);
        console.log(inputs);
        await axios.post("/products", inputs, options);
      }
      navigate("/products");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (params.id) {
      fetchProduct();
    }
    fetchCategories();
  }, [params.id]);

  return (
    <div className="container py-2 h-100">
      <div className="my-4 p-5 bg-body rounded shadow-sm bg-white">
        <h3>{title}</h3>
        <hr />
        <div className="product-form">
          <form onSubmit={handleSubmit}>
            <div className="form-row mb-4">
              <div className="form-group col-md-6">
                <label htmlFor="name">Product Name</label>
                <input
                  type="text"
                  className="form-control mt-2"
                  id="name"
                  placeholder="Enter Your Product Name"
                  name="name"
                  value={inputs.name || ""}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-row mb-4">
              <div className="form-group col-md-6">
                <label htmlFor="price">Price</label>
                <input
                  type="number"
                  className="form-control mt-2"
                  id="price"
                  step="1"
                  name="price"
                  value={inputs.price || ""}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-row mb-4">
              <div className="form-group col-md-6">
                <label htmlFor="rating">Rating</label>
                <input
                  type="text"
                  className="form-control mt-2"
                  id="rating"
                  name="rating"
                  value={inputs.rating || ""}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-row mb-4">
              <div className="form-group col-md-6">
                <label htmlFor="inputState">Category</label>
                <select
                  id="inputState"
                  className="form-control mt-2"
                  name="category"
                  value={JSON.stringify(inputs.category)}
                  onChange={handleChange}
                  readOnly
                >
                  <option value="none">---------------------</option>
                  {categoryList.map((item) => {
                    return (
                      <option key={item.id} value={JSON.stringify(item)}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>

            <button type="submit" className="btn btn-primary" id="button">
              {title}
            </button>
            <Link className="btn btn-secondary" to={"/products"}>
              {" "}
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;

import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const AddCategory = () => {
  let title = "Add Category";
  let params = useParams();

  if (params.id) {
    title = "Update Category";
  }

  const [inputs, setInputs] = useState({
    name: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  async function fetchCategory() {
    const response = await axios.get(`/categories/${params.id}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    setInputs(response.data);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const options = {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      };
      params.id
        ? await axios.put(`/categories/${params.id}`, inputs, options)
        : await axios.post(`/categories`, inputs, options);
      navigate("/categories");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (params.id) {
      fetchCategory();
    }
  }, [params.id]);
  return (
    <div className="container ">
      <div className="d-flex justify-content-around">
        <h3>{title}</h3>
        <Link className="btn btn-primary" to={"/categories"}>
          Category
        </Link>
      </div>
      <hr />{" "}
      <div className="product-form ">
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="name">Category Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter Your Category Name"
                name="name"
                value={inputs.name || ""}
                onChange={handleChange}
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            {title}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCategory;

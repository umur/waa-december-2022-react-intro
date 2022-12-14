import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function UpdateCategory(props) {
  const navigate = useNavigate();

  const params = useParams();

  const [category, setCategory] = useState({
    name: "",
    price: "",
  });

  const getCategory = async () => {
    let result = await axios.get("/categories/" + params.categoryId);
    setCategory(result.data);
  };

  useEffect(() => {
    getCategory();
  }, []);

  const onFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(
        "/categories/" + params.categoryId,
        category
      );
      navigate("/categories");
    } catch (error) {
      console.log(error);
    }
  };

  const onValueChanged = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setCategory({ ...category, [name]: value });
  };

  return (
    <div>
      <form className="w-50 mx-auto" onSubmit={onFormSubmit}>
        <h3>Update Category</h3>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={category.name}
            onChange={onValueChanged}
            placeholder="Enter category name"
            required
          />
        </div>
        <input type="submit" className="btn btn-primary m-1" value="Update" />
      </form>
    </div>
  );
}

export default UpdateCategory;

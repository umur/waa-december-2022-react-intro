import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function AddCategory() {
  const navigate = useNavigate();

  const [category, setCategory] = useState({
    name: "",
    price: "",
  });

  const token = useSelector((state) => state.authReducer.token);

  const header = {
    headers: {
      Authorization: token,
    },
  };

  const onFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/categories", category, header);
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
        <h3>Add New Category</h3>
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
        <input type="submit" className="btn btn-primary m-1" value="Add" />
      </form>
    </div>
  );
}

export default AddCategory;

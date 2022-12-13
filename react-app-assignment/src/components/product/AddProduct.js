import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

function AddProduct() {
  const navigate = useNavigate();

  const [categoryList, setCategoryList] = useState([]);

  const [product, setProduct] = useState({
    name: "",
    price: "",
    rating: "",
    category: {},
  });

  const getCategoryList = async () => {
    let response = await axios.get("/categories");
    setCategoryList(response.data);
  };

  useEffect(() => {
    getCategoryList();
  }, []);

  const onFormSubmit = async (event) => {
    event.preventDefault();
    console.log(product);
    product.category = JSON.parse(product.category);
    try {
      const response = await axios.post(
        "/products",
        product,
      );
      navigate("/products");
    } catch (error) {
      console.log(error);
    }
  };

  const onValueChanged = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setProduct({ ...product, [name]: value });
  };

  return (
    <div>
      <form className="w-50 mx-auto" onSubmit={onFormSubmit}>
        <h3>Add New Product</h3>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={product.name}
            onChange={onValueChanged}
            placeholder="Enter product name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="text"
            className="form-control"
            id="price"
            name="price"
            value={product.price}
            onChange={onValueChanged}
            placeholder="Enter Price"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="rating">Rating</label>
          <input
            type="text"
            className="form-control"
            id="rating"
            name="rating"
            value={product.rating}
            onChange={onValueChanged}
            placeholder="Enter Rating"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            className="form-control"
            id="category"
            name="category"
            value={product.category}
            onChange={onValueChanged}
            required
          >
            <option value="none">
              Select Category
            </option>
            {categoryList.map((item) => {
              console.log(item);
              return (
                <option key={item.id} value={JSON.stringify(item)}>
                  {item.name}
                </option>
              );
            })}
          </select>
        </div>
        <input type="submit" className="btn btn-primary" value="Add" />
      </form>
    </div>
  );
}

export default AddProduct;

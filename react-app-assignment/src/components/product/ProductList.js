import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ProductList(props) {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const token = useSelector((state) => state.authReducer.token);

  async function getProducts() {
    let products = await axios.get("/products", {
      headers: {
        Authorization: token,
      },
    });
    console.log(products);
    setProducts(products.data);
  }

  useEffect(() => {
    getProducts();
  }, []);

  const onDetailsClicked = (id) => {
    navigate("detail/" + id);
  };

  const onUpdateClicked = (id) => {
    navigate("update/" + id);
  };

  const onDeleteClicked = async (id) => {
    if (window.confirm("Confirm delete?")) {
      let response = await axios.delete("/products/" + id);
      getProducts();
    }
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.rating}</td>
                <td>
                  <input
                    type="button"
                    value="Details"
                    className="btn btn-primary m-1"
                    onClick={() => onDetailsClicked(product.id)}
                  />
                  <input
                    type="button"
                    value="Update"
                    className="btn btn-warning m-1"
                    onClick={() => onUpdateClicked(product.id)}
                  />
                  <input
                    type="button"
                    value="Delete"
                    className="btn btn-danger m-1"
                    onClick={() => onDeleteClicked(product.id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

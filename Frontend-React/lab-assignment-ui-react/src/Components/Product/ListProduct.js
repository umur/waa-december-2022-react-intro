import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ListProduct = () => {
  const [productList, setProductList] = useState([]);

  async function fetchProducts() {
    const response = await axios.get("/products", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });

    setProductList(response.data);
  }

  async function handledelete(id) {
    try {
      await axios.delete(`/products/${id}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      setProductList(productList.filter((p) => p.id !== id));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container">
      <div className="my-4 p-4 bg-body rounded shadow-sm bg-white">
        <h3>List of Product</h3>
        <hr />
        <Link className="btn btn-primary" to={"/addProduct"}>
          + Add Product
        </Link>

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
            {productList.map((product) => {
              return (
                <tr key={product.id}>
                  <th scope="row">{product.id}</th>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.rating}</td>
                  <td>{product.category.name}</td>

                  <td>
                    <div className="w-20">
                      <Link
                        className="btn btn-sm btn-outline-primary py-0"
                        to={`/updateProduct/${product.id}`}
                      >
                      <i className="fa fa-edit"> Update</i>
                      </Link>
                      <Link
                        className="btn btn-sm btn-outline-primary py-0"
                        onClick={() => handledelete(product.id)}
                      >
                      <i className="fa fa-trash"> Delete</i>
                      </Link>
                      <Link
                        className="btn btn-sm btn-outline-primary py-0"
                        to={`/productDetails/${product.id}`}
                      >
                      <i className="fa-light fa-memo-circle-info"> .. Details</i>
                      </Link>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListProduct;

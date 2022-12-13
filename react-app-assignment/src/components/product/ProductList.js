import React, { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";

export default function ProductList(props) {

  const navigator = useNavigate();

  const onDetailsClicked = (id) => {
    navigator("detail/" + id);
  }

  const onUpdateClicked = (id) => {
    navigator("update/" + id);
  }

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
          {props.products.map((product) => {
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
                  className="btn btn-warning"
                  onClick={() => onUpdateClicked(product.id)}
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

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function CategoryList(props) {
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);

  const token = useSelector((state) => state.authReducer.token);

  const header = {
    headers: {
      Authorization: token,
    },
  };

  async function getCategories() {
    let categories = await axios.get("/categories", header);
    setCategories(categories.data);
  }

  useEffect(() => {
    getCategories();
  }, []);

  const onUpdateClicked = (id) => {
    navigate("update/" + id);
  };

  const onDeleteClicked = async (id) => {
    if (window.confirm("Confirm delete?")) {
      let response = await axios.delete("/products/" + id);
      getCategories();
    }
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>
                  <input
                    type="button"
                    value="Update"
                    className="btn btn-warning"
                    onClick={() => onUpdateClicked(item.id)}
                  />
                  <input
                    type="button"
                    value="Delete"
                    className="btn btn-danger m-1"
                    onClick={() => onDeleteClicked(item.id)}
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

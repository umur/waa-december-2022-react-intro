import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ListCategory = () => {
  const [categoryList, setCategoryList] = useState([]);

  async function fetchCategories() {
    const response = await axios.get("/categories", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    setCategoryList(response.data);
  }

  async function handledelete(id) {
    try {
      await axios.delete(`/categories/${id}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      setCategoryList(categoryList.filter((category) => category.id !== id));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <div className="container">
      <div className="my-4 p-4 bg-body rounded shadow-sm bg-white">
        <h3>List of Category</h3>
        <hr />
        <Link className="btn btn-primary" to={"/addCategory"}>
          + Add Category
        </Link>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Category Name</th>

              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {categoryList.map((category) => {
              return (
                <tr key={category.id}>
                  <th scope="row">{category.id}</th>
                  <td>{category.name}</td>

                  <td>
                    <Link
                      className="btn btn-sm btn-outline-primary py-0"
                      to={`/updateCategory/${category.id}`}
                    >
                      <i className="fa fa-edit"> Update</i>
                    </Link>
                    <Link
                      className="btn btn-sm btn-outline-primary py-0"
                      onClick={() => handledelete(category.id)}
                    >
                      <i className="fa fa-trash"> Delete</i>
                    </Link>
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

export default ListCategory;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ListAddress = () => {
  const [addressList, setAddressList] = useState([]);

  async function fetchAddress() {
    const response = await axios.get("/admin/addresses", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    setAddressList(response.data);
  }

  useEffect(() => {
    fetchAddress();
  }, []);

  return (
    <div className="container">
      <div className="my-4 p-4 bg-body rounded shadow-sm bg-white">
        <h3>List of Address</h3>
        <hr />
        <Link className="btn btn-primary" to={"/addAddress"}>
          + Add Address
        </Link>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Street</th>
              <th scope="col">Zip</th>
              <th scope="col">City</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {addressList.map((item) => {
              return (
                <tr key={item.id}>
                  <th scope="row">{item.id}</th>
                  <td>{item.street}</td>
                  <td>{item.zip}</td>

                  <td>{item.city}</td>
                  <td>
                    <div className="w-20">
                      <Link
                        className="btn btn-sm btn-outline-primary py-0"
                        to={`/updateAddress/${item.id}`}
                      >
                        <i className="fa fa-edit"> Update</i>
                      </Link>
                      <Link
                        className="btn btn-sm btn-outline-primary py-0"
                        to={`/deleteAddress/${item.id}`}
                      >
                        <i className="fa fa-trash"> Delete</i>
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

export default ListAddress;

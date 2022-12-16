import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const AddAddress = () => {
  let title = "Add Address";
  let params = useParams();
  if (params.id) {
    title = "Update Address";
  }
  const [inputs, setInputs] = useState({
    street: "",
    zip: null,
    city: "",
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  async function fetchAddress() {
    const response = await axios.get(`/addresses/${params.id}`, {
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
        ? await axios.put(`/address/${params.id}`, inputs, options)
        : await axios.post(`/addresses`, inputs, options);
      navigate("/addresses");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (params.id) {
      fetchAddress();
    }
  }, [params.id]);
  return (
    <div className="container ">
      <div className="d-flex justify-content-around">
        <h3>{title}</h3>
        <Link className="btn btn-primary" to={"/addresses"}>
          Address
        </Link>
      </div>
      <hr />{" "}
      <div className="product-form ">
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="streetName">Street Name</label>
              <input
                type="text"
                className="form-control"
                id="streetName"
                name="street"
                value={inputs.street || ""}
                onChange={handleChange}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="zip">Zip</label>
              <input
                type="text"
                className="form-control"
                id="zip"
                name="zip"
                value={inputs.zip || ""}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="city">City</label>
              <input
                type="text"
                className="form-control"
                id="city"
                name="city"
                value={inputs.city || ""}
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

export default AddAddress;

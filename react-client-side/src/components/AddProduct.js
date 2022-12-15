import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './nav';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

function AddProduct() {
  const navigate = useNavigate();
  const tokenVal = useSelector((state) => state.TokenReducer.tokenVal);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const postData = async () => {
      const data = {
        name: name,
        price: price,
      };
      await axios
        .post('/products/save', data, {
          headers: {
            Authorization: `Bearer ${tokenVal}`,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            setMessage('Product added successfully');
            navigate('/home');
          }
        })
        .catch((error) => {
          setMessage('Error adding product: ' + error.message);
        });
    };
    postData();
  };

  return (
    <React.Fragment>
      <NavBar></NavBar>
      <div className="Auth-form-container  ">
        <form className="Auth-form w-75 h-100" onSubmit={handleSubmit}>
          <p className="mt-2 d-flex  justify-content-end mr-2">
            <Link
              to={'/home'}
              className="text-decoration-none btn btn-close"
            ></Link>
          </p>
          <div className="Auth-form-content ">
            <h1 className="Auth-main-title">
              Please add all product information
            </h1>

            <div className="form-group mt-3">
              <label>Product Name</label>
              <input
                required
                type="name"
                className="form-control mt-1"
                placeholder="Enter name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>

            <div className="form-group mt-3">
              <label>Price</label>
              <input
                required
                type="text"
                className="form-control mt-1"
                placeholder="Enter price"
                value={price}
                pattern="\d*"
                onChange={(e) => {
                  if (e.target.value.match('d*')) {
                    setPrice(e.target.value);
                  }
                }}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className=" btn btn-primary">
                Add
              </button>
            </div>

            <div className="mt-2 text-center">
              <span className="text-secondary">{message}</span>
            </div>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default AddProduct;

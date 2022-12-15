import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './nav';
import axios from 'axios';
import { useSelector } from 'react-redux';

function EditProduct() {
  const [name, setName] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [message, setMessage] = React.useState('');
  const tokenVal = useSelector((state) => state.TokenReducer.tokenVal);
  let product;

  const onEditLoad = () => {
    const id = window.location.pathname.split('/')[2];

    const getData = async () => {
      await axios
        .get(`/products/${id}`, {
          headers: { Authorization: `Bearer ${tokenVal}` },
        })
        .then((response) => {
          if (response.status === 200) {
            product = response.data;
            setName(response.data.name);
            setPrice(response.data.price);
          }
        })
        .catch((error) => {
          setMessage('Error getting product: ' + error.message);
        });
    };
    getData();
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();

    const postData = async () => {
      const data = {
        name: name,
        price: price,
      };
      await axios
        .put(`/products/update/${product.id}`, data, {
          headers: {
            Authorization: `Bearer ${tokenVal}`,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            setMessage('Product updated successfully');
          }
        })
        .catch((error) => {
          setMessage('Error updating product: ' + error.message);
        });
    };
    postData();
  };

  return (
    <React.Fragment>
      <NavBar></NavBar>
      <div className="Auth-form-container" onLoad={onEditLoad}>
        <form className="Auth-form w-75 h-100" onSubmit={handleSubmit}>
          <p className="mt-2 d-flex  justify-content-end mr-2">
            <Link
              to={'/home'}
              className="text-decoration-none btn btn-close"
            ></Link>
          </p>
          <div className="Auth-form-content ">
            <h1 className="Auth-main-title">
              Please update product information and save
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
                  setPrice(e.target.value);
                }}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className=" btn btn-primary">
                Update
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

export default EditProduct;

import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'

function ProductDetails() {
  let params = useParams();
  const initialState = {
    id: 0,
    name: "",
    price: 0,
    rating: 0,
    category: Object

  }
  const [product, setProduct] = useState(initialState);
  const [reviews, setReview] = useState([]);
  async function fetchSingleProduct() {
    const response = await axios.get(`http://localhost:8080/products/${params.id}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
    setProduct(response.data);
  }


  async function fetchReview() {
    const response = await axios.get(`http://localhost:8080/reviews/product/${params.id}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });

    setReview(response.data);

  }

  useEffect(() => {
    fetchSingleProduct();
    fetchReview();
  }, []);
  return (
    <div className='container'>
      <h3>Product Description</h3>
      <hr />
      <div>
        Product Name: {product.name || ""}<br />
        Product Category:{product.category.name || ""}<br />
        Product Reviews:
        {reviews.map((item) => {
          return (
            <span key={item.id}>{item.comment}</span>
          )

        })}

      </div>


    </div>
  )
}

export default ProductDetails
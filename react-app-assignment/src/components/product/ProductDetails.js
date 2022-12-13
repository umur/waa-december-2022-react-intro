import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReviewList from "./ReviewList";

function ProductDetails(props) {
  const params = useParams();

  const [productState, setProductState] = useState({});

  const getProduct = async () => {
    let result = await axios.get("/products/" + params.productId);
    setProductState(result.data);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div class="card">
      {/* <img class="card-img-top" src="..." alt="Card image cap"> */}
      <div class="card-body">
        <h5 class="card-title">{productState.name}</h5>
        <p class="card-text">
          Price: <div>{productState.price}</div>
          <div>Rating: {productState.rating}</div>
          <div>Category: {productState.category?.name}</div>
        </p>
        <div>Reviews: {<ReviewList reviews={productState.reviews} />}</div>
      </div>

      {/* <div className="item-container">
      <div>Name: {productState.name}</div>
      <div>Price: {productState.price}</div>
      <div>Rating: {productState.rating}</div>
      <div>Category: {productState.category?.name}</div>
      <div>Reviews: {<ReviewList reviews={productState.reviews} />}</div>
    </div> */}
    </div>
  );
}

export default ProductDetails;

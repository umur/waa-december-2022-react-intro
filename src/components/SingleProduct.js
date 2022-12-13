import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

function SingleProduct() {
  const { productId } = useParams();
  const product = console.log(productId);
  return (
    <section className="section product">
      <h4>apple</h4>
      <p>{productId}</p>
      <Link to="/product">Back to product</Link>
    </section>
  );
}

export default SingleProduct;

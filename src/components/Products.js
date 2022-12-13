import React from "react";
import { Link } from "react-router-dom";

function Products() {
  const products = [
    { id: 1, name: "Nirajan" },
    { id: 2, name: "Susan" },
    { id: 3, name: "Keshab" },
    { id: 4, name: "Om" },
    { id: 5, name: "Mukesh" },
  ];
  return (
    <section className="section">
      {products.map((product) => {
        return (
          <article key={product.id}>
            <h5>{product.name}</h5>
            <Link to={`/product/${product.id}`}>more info</Link>
          </article>
        );
      })}
      <Link to="/home" className="btn">
        Back
      </Link>
    </section>
  );
}

export default Products;

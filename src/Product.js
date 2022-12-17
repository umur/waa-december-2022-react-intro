import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
const Product = () => {
  const fetchProducts = async () => {
    const prod = await axios.get("http://localhost:8081/products");
    setProduct(prod.data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  const initialProduct = [];

  const [productSt, setProduct] = useState(initialProduct);
  return (
    productSt.map((x) => {
        return( <div>{x.name}</div>);
   
            })
    );
};

export default Product;

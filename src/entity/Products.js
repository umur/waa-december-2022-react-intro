import axios from "axios";
import React, { useEffect } from "react";
import Product from "./Product";

export default function Products(props) {

  const [products, setProducts] = React.useState([]);

  const getProducts = async () => {

    const response = await axios.get("/products");
    setProducts(response.data);
  }

  useEffect(() => {
    getProducts();
  }, []); 


  return (

    persons.map((item) => {
      return (
        <Product
          key={item.id} // keyword
          name={item.firstname}
          price={item.lastname}
          id={item.id}
        />
      )
    })

  )

}
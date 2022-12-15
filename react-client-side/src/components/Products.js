import React from 'react';
import Product from './Product';

function Products(props) {
  return (
    <React.Fragment>
      {props.products.map((element) => {
        return (
          <Product
            key={element.id}
            id={element.id}
            name={element.name}
            price={element.price}
          />
        );
      })}
    </React.Fragment>
  );
}

export default Products;

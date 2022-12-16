import Product from "./Product";

const ProductList = (props) => {
  return props.products.map((product) => (
    <Product
      key={product.id}
      name={product.name}
      price={product.price}
      rating={product.rating}
      category={product.category}
    />
  ));
};

export default ProductList;
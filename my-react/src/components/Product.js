import axios from "axios";
import { useEffect } from "react";

const Product = () => {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
    const prod = await axios.get("http://localhost:8000/api/products");
    setProducts(prod.data);
    };
    useEffect (() => {
        fetchProducts();
    }, []);

    
    return ( 
        <div>
            <h1>Products</h1>
            {products.map((product) => (
                <div key={product.id}>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                </div>
            ))}
        </div>
     );
}
 
export default Product;
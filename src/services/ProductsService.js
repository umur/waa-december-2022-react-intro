import axios from "axios";
import { useSelector } from "react-redux";

const ProductsService = {
    getProducts: (offset, count, headers) => {
        return axios.get(`/products?offset=${offset}&count=${count}`, {headers});
    },
    deleteProduct: (productId, headers) => {
        return axios.delete(`/products/${productId}`, {headers});
    },
    addProduct: (name, price, user, headers) => {
        return axios.post('/products', {name, price, user}, {headers})
    }
};

export default ProductsService;
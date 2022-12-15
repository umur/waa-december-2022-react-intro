import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Product() {
    const { id } = useParams("id");
    async function fetchProduct() {
        const response = await axios.get(`/products/${id}`);
        console.log(response);
        setProduct(response.data);
    }

    useEffect(() => {
        fetchProduct();
    }, [id]);
    const [product, setProduct] = useState({});
    return (
        <>
            <h1>Product</h1>
            <table>
                <tbody>
                    <tr>
                        <td>Name: </td>
                        <td>{product.name}</td>
                    </tr>
                    <tr>
                        <td>Price: </td>
                        <td>{product.price}</td>
                    </tr>
                    <tr>
                        <td>Rating: </td>
                        <td>{product.rating}</td>
                    </tr>
                    <tr>
                        <td>Category: </td>
                        <td>{product.category?.name}</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}
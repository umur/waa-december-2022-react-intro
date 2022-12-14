import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProductForm from './components/Product-Form';
import edit from '../../images/edit.png';
import './products.css';

function Products() {

    const [displayForm, setDisplayForm] = useState(false);
    const [currentProduct, setCurrentProduct] = useState(0);
    const [productsState, setProductsState] = useState([]);

    const fetchProducts = async function () {
        //set token in header
        const token = localStorage.getItem('token');
        const products = await axios.get('/products', {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
        setProductsState(products.data);
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    const addClick = () => {
        setDisplayForm(true);
    }

    const editClick = (id) => {
        setDisplayForm(true);
        setCurrentProduct(id)
        console.log(id);
    }

    return (
        <div className='products'>
            <label className='h2'>Products</label>
            <Button variant='success' onClick={addClick}>Add</Button>

            {displayForm ? <ProductForm id={currentProduct}/> : (
                <ul>
                    {productsState.map((product, index) => {
                        return (
                            <li key={index}>
                                <Link to={"/products/" + product.id}>{product.name} - {product.price}</Link>
                                <img src={edit} alt ="edit" height="16px" className='padded' onClick={() => editClick(product.id)}/>
                            </li>
                        )
                    })}
                </ul>
            )}
        </div>
    );
}

export default Products;
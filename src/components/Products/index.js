import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProductForm from './components/Product-Form';
import edit from '../../images/edit.png';
import  './products.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFormVisible } from '../../redux/productReducer';
import { handleError } from '../../utilities';

function Products() {

    const isFormVisible = useSelector((state) => state.productReducer.isFormVisible);
    const dispatch = useDispatch();

    const [currentProduct, setCurrentProduct] = useState(0);
    const [productsState, setProductsState] = useState([]);

    const fetchProducts =  function () {
        axios.get('/products')
            .then(products => {
                setProductsState(products.data);
            })
            .catch(error => handleError(error, dispatch));
    }

    useEffect(() => {
        fetchProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const addClick = () => {
        dispatch({ type:"product/setFormVisible", payload:true });
        // dispatch(setFormVisible(true));
    }

    const editClick = (id) => {
        dispatch(setFormVisible(true));
        setCurrentProduct(id);
    }

    return (
        <div className='products'>
            <label className='h2'>Products</label>
            <Button variant='success' onClick={addClick}>Add</Button>

            {isFormVisible ? <ProductForm id={currentProduct}/> : (
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
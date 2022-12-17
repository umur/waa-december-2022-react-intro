import axios from 'axios';
import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { getProduct } from '../../../../services/productService';
import './product.css';

function Product() {
    
    const product = useSelector(state => state.productReducer.product);

    const params = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const fetchProduct = async function () {
        dispatch(getProduct({url : `/products/${params.id}`}))
    }

    useEffect(() => {
        fetchProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onDelete = async function(){
        await axios.delete('/products/' + params.idProduct);
        navigate(-1);
    }

    const {
        name,
        price,
        rating,
        category
    } = product;
    return (
        <div className='product'>
            <div>
                Category: {category.name}
            </div>
            <div>
                Name: {name}
            </div>
            <div>
                Price: {price}
            </div>
            <div>
                Rating: {rating}
            </div>

            <Button variant='warning' onClick={onDelete}>delete</Button>
        </div>
    );
}

export default Product;
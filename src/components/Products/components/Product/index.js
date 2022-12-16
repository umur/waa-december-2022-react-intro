import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router';
import './product.css';

function Product() {
    
    const initialState = {
        name: '',
        price: 0,
        rating: 0,
        category: {},
        reviews: []
    }

    const [productState, setProductState] = useState(initialState);

    const params = useParams();
    const navigate = useNavigate();

    const fetchProduct = async function () {
        const products = await axios.get('/products/' + params.idProduct);
        setProductState(products.data);
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
    } = productState;
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
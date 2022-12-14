import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import './product-form.css';

function ProductForm(props) {

    const initialState = {
        successMessage: '',
        errorMessage: '',
        category: '',
        name: '',
        price: '',
        rating: ''
    };
console.log('props', props);
    const [productFormState, setProductFormState] = useState(initialState);
    const [categories, setCategories] = useState([]);

    const fetchCategories = async function () {
        //set token in header
        const token = localStorage.getItem('token');
        const categories = await axios.get('/categories', {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
        setCategories(categories.data);
    }
    const fetchProduct = async function () {
        //set token in header
        const token = localStorage.getItem('token');
        const product = await axios.get('/products/'+props.id, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
        
        setProductFormState({...product.data, category: product.data.category.id});
    }

    useEffect(() => {
        fetchCategories();
        if(props.id)
            fetchProduct();
    }, []);

    const changeCategory = (e) => setProductFormState({ ...productFormState, category: e.target.value });
    const changeName = (e) => setProductFormState({ ...productFormState, name: e.target.value });
    const changePrice = (e) => setProductFormState({ ...productFormState, price: e.target.value });
    const changeRating = (e) => setProductFormState({ ...productFormState, rating: e.target.value });

    const saveProduct = async function (event) {
        event.preventDefault();

        const token = localStorage.getItem('token');
        const data = {
            id: props.id || 4010,
            name: productFormState.name,
            price: productFormState.price,
            rating: productFormState.rating,
            category: {
                id: productFormState.category
            }
        };

        //if update
        if(props.id) {
            await axios.put('/products/' + props.id, data, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }});
        } else {
            await axios.post('/products', data, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }});
        }
    }

    const reset = function (event) {
        event.preventDefault();
        setProductFormState(initialState);
    }

    const {
        successMessage,
        errorMessage,
        category,
        name,
        price,
        rating
    } = productFormState;

    return (
        <div>
            {successMessage && (
                <Alert key='success' variant='success'>
                    <p>{successMessage}</p>
                </Alert>
            )}
            {errorMessage && (
                <Alert key='danger' variant='danger'>
                    <p>{errorMessage}</p>
                </Alert>
            )}

            <Form onSubmit={saveProduct} onReset={reset}>
                <Form.Group>
                    <Form.Label>Category</Form.Label>
                    <Form.Select value={category} onChange={changeCategory}>
                        <option>select category</option>
                        {categories.map((category) => {
                            return (
                                <option key={category.id} value={category.id}>{category.name}</option>
                            )
                        })}
                    </Form.Select>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control className='form-control' value={name} placeholder="product name" onChange={changeName} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Price</Form.Label>
                    <Form.Control className='form-control' value={price} placeholder="price" onChange={changePrice} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Rating</Form.Label>
                    <Form.Control className='form-control' value={rating} placeholder="rating" onChange={changeRating} />
                </Form.Group>
                <Form.Group className='mt-2'>
                    <Button variant='success' type='submit'>Save</Button>
                    <Button variant='warning' type='reset' className='ml-2'>Cancel</Button>
                </Form.Group>
            </Form>
        </div>
    );
}

export default ProductForm;
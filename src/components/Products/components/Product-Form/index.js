import React, { useEffect, useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { setFormVisible } from '../../../../redux/productReducer';
import { getCategories } from '../../../../services/categoryService';
import { getProduct, saveProduct, updateProduct } from '../../../../services/productService';
import './product-form.css';

function ProductForm(props) {

    const dispatch = useDispatch();
    const params = useParams();
    const formRef = useRef();

    const categories = useSelector(state => state.categoryReducer.categories);
    const product = useSelector(state => state.productReducer.product);

    useEffect(() => {
        dispatch(getCategories());

        if (props.id) {
            dispatch(getProduct("/products/" + props.id));
        }

        if (params.id) {
            const elem = formRef.current.category;
            elem.value = params.id;
            elem.setAttribute('disabled', true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (props.id) {
            const { category, name, price, rating } = product;
            formRef.current.category.value = category && category.id;
            formRef.current.name.value = name;
            formRef.current.price.value = price;
            formRef.current.rating.value = rating;
        }
    }, [product, categories, props.id])

    const save = function(event) {
        event.preventDefault();

        const data = {
            id: props.id || 4010,
            name: formRef.current.name.value,
            price: formRef.current.price.value,
            rating: formRef.current.rating.value,
            category: {
                id: formRef.current.category.value
            }
        };

        //if update
        if (props.id) {
            const payload = {
                url: '/products/' + props.id,
                data
            }

            dispatch(updateProduct(payload));

        } else {
            const payload = {
                url: '/products',
                data
            }
            dispatch(saveProduct(payload));
        }
    }

    const reset = function (event) {
        event.preventDefault();
        dispatch(setFormVisible(false));
    }

    return (
        <div>
            <Form onSubmit={save} onReset={reset} ref={formRef}>
                <Form.Group>
                    <Form.Label>Category</Form.Label>
                    <Form.Select name="category">
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
                    <Form.Control className='form-control' placeholder="product name" name="name" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Price</Form.Label>
                    <Form.Control className='form-control' name="price" placeholder="price" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Rating</Form.Label>
                    <Form.Control className='form-control' name="rating" placeholder="rating" />
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
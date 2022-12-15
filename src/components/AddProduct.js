import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import ProductsService from "../services/ProductsService";

const AddProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(NaN);
    const navigate = useNavigate();

    const headersState = useSelector(state => state.userReducer.headers);
    const userState = useSelector(state => state.userReducer.user);

    const addProduct = () => {
        console.log('add new product: ', name, price);
        ProductsService.addProduct(name, price, userState, headersState)
            .then(res => {
                navigate('/products');
            }).catch(err => {
                console.error(err);
            })
    }
    return(
        <div className='col-md-3 register-wrapper'>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Product name</Form.Label>
                    <Form.Control type="text" placeholder="Product name" onChange={(e) => setName(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formFirstname">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" placeholder="Price" onChange={(e) => setPrice(e.target.value)} />
                </Form.Group>

                <Button variant="primary" type="button" onClick={addProduct}>
                    Add Product
                </Button>
            </Form>
        </div>
    )
}

export default AddProduct;
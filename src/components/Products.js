import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { setProducts } from "../redux/productReducer";
import ProductsService from "../services/ProductsService";

const Products = () => {
    const [offsetState, setOffset] = useState(0);
    const [countState, setCount] = useState(5);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const isAdminState = useSelector(state => state.userReducer.isAdmin);
    const headersState = useSelector(state => state.userReducer.headers);
    const productsState = useSelector(state => state.productReducer.products);

    const getProducts = (offset, count, headers) => {
        ProductsService.getProducts(offset, count, headers)
            .then(res => {
                dispatch(setProducts(res.data.content));
            }).catch(err => {
                console.error(err);
            })
    }

    const deleteProduct = (productId) => {
        ProductsService.deleteProduct(productId)
            .then(res => {
                getProducts(offsetState, countState, headersState);
            }).catch(err => {
                console.error(err);
            });
    }

    const gotoLogin = () => {
        navigate('/login');
    }
    const gotoAddProduct = () => {
        navigate('/add-product')
    }

    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if(!token) {
            gotoLogin();
        } else if(JSON.stringify(headersState) !== '{}') {
            getProducts(offsetState, countState, headersState);
        }
    }, [headersState]);

    const getRow = (product, ind) => {
        return (
            <tr key={ind}>
                <td>{ind + 1}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                {
                    isAdminState && (
                        <td>
                            <Button variant="primary">Edit</Button>{' '}
                            <Button variant="danger" onClick={() => deleteProduct(product.id)}>Delete</Button>{' '}
                        </td>
                    )
                }
            </tr>
        )
    }
    return(
        <div className='col-md-8 products-container'>
            <div className="add-product">
                <Button variant="primary" onClick={gotoAddProduct}>Add Product</Button>{' '}
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product</th>
                        <th>Price</th>
                        {isAdminState && (<th>Action</th>)}
                    </tr>
                </thead>
                <tbody>
                    {
                        productsState.map((product, ind) => getRow(product, ind))
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Products;
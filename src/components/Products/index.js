import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import ProductForm from './components/Product-Form';
import './products.css';
import { useDispatch, useSelector } from 'react-redux';
import { resetMessage, setFormVisible } from '../../redux/productReducer';
import { Space, Table } from 'antd';
import editIcon from '../../images/edit.png';
import deleteIcon from '../../images/delete.png';
import { setErrorMessage, setSuccessMessage } from '../../redux/appReducer';
import { deleteProduct, getProducts } from '../../services/productService';

function Products() {

    const isFormVisible = useSelector((state) => state.productReducer.isFormVisible);
    const dispatch = useDispatch();
    const params = useParams();

    const [currentProduct, setCurrentProduct] = useState(0);

    const { products, successMessage, errorMessage } = useSelector(state => state.productReducer);

    useEffect(() => {
        let url = '/products';
        if (params.id) {
            url += '/filter-by-category?id=' + params.id;
        }
        dispatch(getProducts(url));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params]);

    useEffect(() => {
        //componentWillUnmount();
        return () => {
            dispatch(setErrorMessage(''));
            dispatch(setSuccessMessage(''));
            dispatch(resetMessage());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(()=> {
        dispatch(setSuccessMessage(successMessage));
        dispatch(setErrorMessage(errorMessage));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [successMessage, errorMessage])

    const addClick = () => {
        setCurrentProduct(0);
        dispatch(setFormVisible(true));
        // dispatch({ type:"product/setFormVisible", payload:true });
    }

    const editClick = (id) => {
        dispatch(setFormVisible(true));
        setCurrentProduct(id);
    }

    const deleteClick = function (id) {
        if (window.confirm('Are you sure you want to delete?')) {
            dispatch(deleteProduct({ url: '/products/' + id }))
        }
    }

    // Sample Columns data
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Category name',
            dataIndex: 'category',
            key: 'category.name',
            render: item => item.name
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Rating',
            dataIndex: 'rating',
            key: 'rating',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <img src={editIcon} alt="edit" height="16px" onClick={() => editClick(record.id)} />
                    <img src={deleteIcon} alt="delete" height="16px" onClick={() => deleteClick(record.id)} />
                    <Link to={`/products/${record.id}/reviews`} className='link-product'>reviews</Link>
                </Space>
            )
        }
    ];

    return (
        <div className='products'>
            <label className='h2'>Products</label>
            <Button variant='success' onClick={addClick}>Add</Button>

            {isFormVisible ?
                <ProductForm id={currentProduct} /> : (
                    <Table dataSource={products} columns={columns} rowKey="id" />
                )
            }
        </div>
    );
}

export default Products;
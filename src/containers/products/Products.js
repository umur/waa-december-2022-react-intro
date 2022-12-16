import React from 'react'
import { useState } from 'react';
import Product from '../../components/product/Product';

function Products(props) {

    const [productList, setProductList] = useState(props.products)
    const [product, setProduct] = useState({ id: "", name: "", price: 0 })

    const onClickAddProduct = () => {
        const copyProductList = [...productList] //why copy?
        copyProductList.push(product);
        setProductList(copyProductList);
    }

    const onChangeProduct = (event) => {
        const updatedProduct = { ...product, [event.target.name]: event.target.value };
        setProduct(updatedProduct)
    }

    return (
        <div>
            <input type={'button'} value='Add product' onClick={onClickAddProduct} />
            <input type={'text'} placeholder='Enter ID' name='id' value={product.id} onChange={onChangeProduct} />
            <input type={'text'} placeholder='Enter name' name='name' value={product.name} onChange={onChangeProduct} />
            <input type={'text'} placeholder='Enter price' name='price' value={product.price} onChange={onChangeProduct} />

            <Product
                productList={productList}
            />

        </div>
    );
}

export default Products;
import React from 'react'
import { Route, Routes } from 'react-router';
import ListProduct from '../Components/Product/ListProduct';
import AddProduct from '../Components/Product/AddProduct';
import ListReview from '../Components/Review/ListReview';
import Header from '../Header'
import ListCategory from '../Components/Category/ListCategory';
import AddCategory  from '../Components/Category/AddCategory';
import AddAddress from '../Components/Address/AddAddress';
import ListAddress from '../Components/Address/ListAddress';

import Login from './Login';
import Signup from './Signup';
import Home from '../Components/Home';
import ProductDetails from '../Components/Product/ProductDetails';

function Dashboard() {
    const accessToken=localStorage.getItem("accessToken");
    return (
        <>
            <Header />
            <Routes>

            { accessToken ?(
                <>
                <Route path='/products' element=<ListProduct /> />
                <Route path='/addProduct' element=<AddProduct /> />
                <Route path='/updateProduct/:id' element=<AddProduct /> />
                <Route path='/productDetails/:id' element=<ProductDetails /> />

                <Route path='/review' element=<ListReview /> />

                <Route path='/categories' element=<ListCategory /> />
                <Route path='/addCategory' element=<AddCategory /> />
                <Route path='/updateCategory/:id' element=<AddCategory /> />

                <Route path='/addresses' element=<ListAddress /> />
                <Route path='/addAddress' element=<AddAddress /> />
                <Route path='/updateAddress/:id' element=<AddAddress /> />
                <Route path='/login' element=<Login /> />
                <Route path='/signup' element=<Signup /> />
                <Route path='/' element=<Home /> />
                
                </>
                

            ):(
                <>
                 <Route path='/login' element=<Login /> />
                <Route path='/signup' element=<Signup /> />
                <Route path='/' element=<Home /> />
                </> )}
            </Routes>
        
        </>

    )
}

export default Dashboard
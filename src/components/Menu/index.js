import React from 'react';
import { Link } from 'react-router-dom';
import './menu.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Login from '../login';

function Menu() {
    return (
       
        <Navbar bg="secondary" expand="lg" variant='dark'>
            <Container fluid>
                {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link className='nav-link' to="/">Dashboard</Link>
                        <Link className='nav-link' to="/categories">Categories</Link>
                        <Link className='nav-link' to="products">Products</Link>
                        <Link className='nav-link' to="register">Register</Link>
                    </Nav>

                    <Login />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Menu;


import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import './login.css';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import logo from '../../images/user.png';
import jwt from 'jwt-decode'
import { useDispatch, useSelector } from 'react-redux';
import { setLogIn } from '../../redux/userReducer';
import { useNavigate } from 'react-router';

function Login() {

    const initialState = '';
    const [userName, setUserName] = useState(initialState);

    const loginRef = useRef();
    let isLoggedIn = useSelector((state) => state.userReducer.isLoggedIn);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setUser(token);
            dispatch(setLogIn(true));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const setUser = function (token) {
        var info = jwt(token);
        setUserName(info.sub);
    }

    const onSubmit = async function (event) {
        event.preventDefault();

        const response = await axios.post('/uaa/signin', {
            email: loginRef.current.username.value,
            password: loginRef.current.password.value,
        });

        if (response.status < 300) {
            localStorage.setItem('token', response.data.accessToken);
            setUser(response.data.accessToken);
            dispatch(setLogIn(true));
            navigate('/');
        }
    }

    const logout = function () {
        localStorage.removeItem('token');
        dispatch(setLogIn(false));
        setUserName(initialState);
    }

    return (
        <div className='login'>

            {isLoggedIn ? (
                <Form className='greeting'>
                    <img src={logo} alt='user' height='20px' />
                    <span>{userName}</span>
                    <Button variant='primary' onClick={logout}>Logout</Button>
                </Form>
            ) : (
                <div>
                    <Form className='login-form' onSubmit={onSubmit} ref={loginRef}>
                        <Form.Control className='form-control' name="username" placeholder="username" />
                        <Form.Control className='form-control' name="password" placeholder="password" />
                        <Button variant='primary' type='submit'>Login</Button>
                    </Form>
                </div>
            )}
        </div>
    );
}

export default Login;
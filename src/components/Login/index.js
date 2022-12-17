import React, { useEffect, useRef, useState } from 'react';
import './login.css';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import logo from '../../images/user.png';
import jwt from 'jwt-decode'
import { useDispatch, useSelector } from 'react-redux';
import { setToken } from '../../redux/userReducer';
import { useNavigate } from 'react-router';
import { signIn } from '../../services/userService';

function Login() {

    const initialState = '';
    const [userName, setUserName] = useState(initialState);

    const loginRef = useRef();
    const { isLoggedIn, token } = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setUser(token);
            dispatch(setToken(token));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const setUser = function (token) {
        var info = jwt(token);
        setUserName(info.sub);
    }

    const onSubmit = async function (event) {
        event.preventDefault();

        const payload = {
            url: '/uaa/signin',
            data: {
                email: loginRef.current.username.value,
                password: loginRef.current.password.value
            }
        }

        dispatch(signIn(payload));
    }

    useEffect(() => {
        if(token){
            setUser(token);
            localStorage.setItem('token', token);
        } else 
            localStorage.removeItem('token');

        navigate('/');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token])

    const logout = function () {
        dispatch(setToken(""));
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
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './login.css';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import logo from '../../images/icons-user-30.png';
import jwt from 'jwt-decode'

function Login() {
    const initialState = {
        isLoggedIn: false,
        userName: '',
        password: ''
    };

    const [loginState, setLoginState] = useState(initialState);

    useEffect(() => {
        console.log(localStorage.getItem('token'));
        const token = localStorage.getItem('token');
        if(token){
            var info = jwt(token);
            setLoginState({...loginState, isLoggedIn: true, userName: info.sub});
        }
            
    }, []);

    const onSubmit = async function(event){
        event.preventDefault();
        const response = await axios.post('/uaa/signin', {
            email: userName,
            password: password,
        });

        if(response.status < 300) {
            localStorage.setItem('token', response.data.accessToken);
            setLoginState({...loginState, isLoggedIn: true});
        }
    }

    const changeUserName = function(e){
        setLoginState({...loginState, userName: e.target.value});
    }
    const changePassword = function(e){
        setLoginState({...loginState, password: e.target.value});
    }
    const logout = function() {
        localStorage.removeItem('token');
        setLoginState(initialState);
    }

    const { isLoggedIn, userName, password } = loginState;
    
    return (
        <div className='login'>

            {isLoggedIn ? (
                <Form className='greeting'>
                    <img src={logo} alt='user' height='20px'/>
                    <span>{userName}</span>
                    <Button variant='primary' onClick={logout}>Logout</Button>
                </Form>
            ) : (
                <div>
                    <Form className='login-form' onSubmit={onSubmit}>
                        <Form.Control className='form-control' name="username" placeholder="username" value={userName} onChange={changeUserName}/>
                        <Form.Control className='form-control' name="password" placeholder="password" value={password} onChange={changePassword}/>
                        <Button variant='primary' type='submit'>Login</Button>
                    </Form>
                </div>
            )}
        </div>
    );
}

export default Login;
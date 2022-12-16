import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setErrorMessage, setSuccessMessage } from '../../redux/appReducer';
import './register.css';

function Register() {

    const initialState = {
        name: '',
        userName: '',
        password: '',
        confirmPassword: ''
    };

    const [registerState, setRegisterState] = useState(initialState);
    const dispatch = useDispatch();

    useEffect(() => {
        //componentWillUnmount();
        return ()=> {
            dispatch(setErrorMessage(''));
            dispatch(setSuccessMessage(''));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const changeName = (e) => setRegisterState({...registerState, name: e.target.value});
    const changeUserName = (e) => setRegisterState({...registerState, userName: e.target.value});
    const changePassword = (e) => setRegisterState({...registerState, password: e.target.value});
    const changeConfirmPassword = (e) => setRegisterState({...registerState, confirmPassword: e.target.value});

    const register = async function (event) {
        event.preventDefault();

        const response = await axios.post('/uaa/signup', {
            id: 4010,
            email: userName,
            password: password,
            firstName: name.split(' ')[0],
            lastName: name.split(' ')[1]
        });

        if(response.status < 300)
            dispatch(setSuccessMessage('User registered successfully'));
        else
            dispatch(setErrorMessage('Error registering user'));
    }

    const reset = function(event){
        event.preventDefault();
        setRegisterState(initialState);
    }

    const {
        name,
        userName,
        password,
        confirmPassword
    } = registerState;

    return (
        <div className='register'>
            
            <Form onSubmit={register} onReset={reset}>
                <Form.Group>
                    <Form.Label>Full name</Form.Label>
                    <Form.Control className='form-control' value={name} placeholder="full name" onChange={changeName}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>User name</Form.Label>
                    <Form.Control className='form-control' value={userName} placeholder="username" onChange={changeUserName}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control className='form-control' value={password} type="password" placeholder="password" onChange={changePassword}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Confirm password</Form.Label>
                    <Form.Control className='form-control' value={confirmPassword} type="password" placeholder="confirm password" onChange={changeConfirmPassword}/>
                </Form.Group>
                <Form.Group>
                    <Button variant='success' type='submit'>Register</Button>
                    <Button variant='warning' type='reset'>Reset</Button>
                </Form.Group>
            </Form>
        </div>
    );
}

export default Register;
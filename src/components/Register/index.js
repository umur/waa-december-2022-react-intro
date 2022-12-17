import React, { useEffect, useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setErrorMessage, setSuccessMessage } from '../../redux/appReducer';
import { resetMessage } from '../../redux/userReducer';
import { signUp } from '../../services/userService';
import './register.css';

function Register() {

    const { errorMessage, successMessage } = useSelector(state => state.userReducer);
    const dispatch = useDispatch();

    const formRef = useRef();

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

    const register = async function (event) {
        event.preventDefault();

        let lastName = "";
        let firstName = formRef.current.fullName.value;
        let email = formRef.current.name.email;
        let password = formRef.current.password.value;

        if(firstName === "" || email === "" || password === ""){
            return;
        }

        if(firstName.includes(' ')){
            lastName = firstName.split(' ')[1];
            firstName = firstName.split(' ')[0];
        } 
        
        if(formRef.current.password.value !== formRef.current.confirmPassword.value){
            dispatch(setErrorMessage("Password doesn't match!"));
            return;
        }

        const payload = {
            url: '/uaa/signup',
            data: {
                id: 4010,
                email,
                password,
                firstName,
                lastName,
            }
        }
        dispatch(signUp(payload));
    }

    const reset = function (event) {
        event.preventDefault();
        formRef.current.fullName.value = "";
        formRef.current.email.value = "";
        formRef.current.password.value = "";
        formRef.current.confirmPassword.value = "";
    }

    return (
        <div className='register'>

            <Form onSubmit={register} onReset={reset} ref={formRef}>
                <Form.Group>
                    <Form.Label>Full name</Form.Label>
                    <Form.Control className='form-control' name="fullName" placeholder="full name"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control className='form-control' name="email" placeholder="email"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control className='form-control' name="password" type="password" placeholder="password"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Confirm password</Form.Label>
                    <Form.Control className='form-control' name="confirmPassword" type="password" placeholder="confirm password"/>
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
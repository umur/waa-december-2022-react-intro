import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router";
import UaaService from "../services/UaaService";
import DismissibleAlert from "./DismissibleAlert";

const Register = () => {
    const [email, setEmail] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const firstnameChange = (e) => {
        setFirstname(e.target.value);
    }

    const lastnameChange = (e) => {
        setLastname(e.target.value);
    }

    const passwordChange = (e) => {
        setPassword(e.target.value);
    }

    const confirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    }

    const emailChange = (e) => {
        setEmail(e.target.value);
    }

    const register = (e) => {
        e.preventDefault();
        if(password === confirmPassword) {
            UaaService.register(email, firstname, lastname, password)
                .then(res => {
                    localStorage.setItem('accessToken', res.data.accessToken)
                    localStorage.setItem('refreshToken', res.data.refreshToken)
                    navigate('/products');
                }).catch(err => {
                    console.error(err);
                });
        } else {
            setShowAlert(true);
        }
        console.log(email, firstname, lastname, password, confirmPassword, showAlert);
    }
    
    return (
        <React.Fragment>
            <div className='col-md-3 register-wrapper'>
            <Form onSubmit={register}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" onChange={emailChange} required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formFirstname">
                    <Form.Label>First name</Form.Label>
                    <Form.Control type="text" placeholder="First name" onChange={firstnameChange} required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formLastname">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control type="text" placeholder="Last name" onChange={lastnameChange} required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={passwordChange} required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={confirmPasswordChange} required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
        </div>
        {showAlert && <DismissibleAlert setShowAlert={setShowAlert} message={'Password and confirm password doesn\'t match!'} />}
        </React.Fragment>
    )
}

export default Register;
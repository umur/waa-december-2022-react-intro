import jwtDecode from "jwt-decode";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setHeaders, setIsAdmin, setIsLoggedIn } from "../redux/userReducer";
import UaaService from "../services/UaaService";

const Login = () => {
    const navigate = useNavigate(); 
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const login = (e) => {
        e.preventDefault();
        UaaService.login(username, password)
            .then(res => {
                localStorage.setItem('accessToken', res.data.accessToken);
                localStorage.setItem('refreshToken', res.data.refreshToken);
                const isAdmin = jwtDecode(res.data.accessToken)['isAdmin'];
                dispatch(setIsAdmin(isAdmin));
                dispatch(setIsLoggedIn(true));
                dispatch(setHeaders(res.data.accessToken))
                navigate('/products');
            }).catch(err => {
                console.error(err);
            });
    }

    return (
        <div className='col-md-3 login-wrapper'>
            <Form onSubmit={login}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e) => setUsername(e.target.value)} required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                </Form.Group>
                <Button variant="primary" type="submit" >
                    Log in
                </Button>
                <div className='form-element'>
                    New User <Link to="/register">Signup!</Link>
                </div>
            </Form>
        </div>
    )
}

export default Login;
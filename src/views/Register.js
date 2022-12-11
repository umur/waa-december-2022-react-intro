import { Box } from '@mui/material';
import { useState, forwardRef } from 'react';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
// import ReactDOM from 'react-dom/client';

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Register() {

    async function register() {
        const response = await axios.post('http://localhost:8080/uaa/signup', inputs);
        console.log(response);
        if (response.status === 200)
            setOpen(true);
    }

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify(inputs));
        register();
    }

    /******Snackbar code*****/
    const [open, setOpen] = useState(false);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    /******Snackbar code end*****/

    return (
        <>
            <Box>
                <form onSubmit={handleSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td><label>Firstname: </label></td>
                                <td>
                                    <input
                                        type="text"
                                        name="firstname"
                                        value={inputs.firstname || ""}
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td><label>Lastname: </label></td>
                                <td>
                                    <input
                                        type="text"
                                        name="lastname"
                                        value={inputs.lastname || ""}
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td><label>Email: </label></td>
                                <td>
                                    <input
                                        type="email"
                                        name="email"
                                        value={inputs.email || ""}
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td><label>Password: </label></td>
                                <td>
                                    <input
                                        type="password"
                                        name="password"
                                        value={inputs.password || ""}
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <input type="submit" value="Register" />
                </form>
            </Box>

            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    User registered. please login.
                </Alert>
            </Snackbar>
        </>
    )
}
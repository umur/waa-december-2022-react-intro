import { Box } from '@mui/material';
import { useState, forwardRef } from 'react';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';
import { processToken } from '../utils/auth';
// import ReactDOM from 'react-dom/client';

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Login() {
    const navigate = useNavigate();

    async function login() {
        const response = await axios.post('/uaa', inputs);
        console.log(response);
        if (response.status === 200) {
            if (processToken(response.data.accessToken)) {
                setOpen(true);
                navigate("/home");
            }
        }
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
        login();
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
                    <input type="submit" value="Login" />
                </form>
            </Box>

            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    User logged in
                </Alert>
            </Snackbar>
        </>
    )
}
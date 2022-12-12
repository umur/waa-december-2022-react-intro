import { Box } from '@mui/material';
import { useState, forwardRef, useEffect } from 'react';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useNavigate, useParams } from 'react-router-dom';
// import ReactDOM from 'react-dom/client';

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function ProductForm() {
    const navigate = useNavigate();
    let mode = 'add';

    console.log("here");
    let { id } = useParams("id");
    if (id) {
        mode = 'edit';
    }

    async function fetchProduct() {
        const response = await axios.get(`/products/${id}`);
        console.log(response);
        setInputs(response.data);
    }

    useEffect(() => {
        if (id) {
            fetchProduct();
        }
    }, []);

    async function save() {
        const response = mode === 'add' ? await axios.post('/products', inputs) : await axios.put(`/products/${id}`, inputs);
        console.log(response);
        if (response.status === 200) {
            setOpen(true);
            navigate("/products");
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
        save();
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
                                <td><label>Product name: </label></td>
                                <td>
                                    <input
                                        type="text"
                                        name="name"
                                        value={inputs.name || ""}
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td><label>Price: </label></td>
                                <td>
                                    <input
                                        type="number"
                                        name="price"
                                        value={inputs.price || ""}
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td><label>Rating: </label></td>
                                <td>
                                    <input
                                        type="number"
                                        name="rating"
                                        value={inputs.rating || ""}
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <input type="submit" value="Save" />
                </form>
            </Box>

            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Product added. Should be redirected to Product detail now
                </Alert>
            </Snackbar>
        </>
    )
}
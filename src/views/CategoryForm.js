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

export default function CategoryForm() {
    const navigate = useNavigate();
    let mode = 'add';

    const { id } = useParams("id");
    if (id) {
        mode = 'edit';
    }

    async function fetchCategory() {
        const response = await axios.get(`/categories/${id}`);
        setInputs(response.data);
    }

    useEffect(() => {
        if (id)
            fetchCategory();
    }, [id]);

    async function save() {
        const response = mode === 'add' ? await axios.post('/categories', inputs) : await axios.put(`/categories/${id}`, inputs);
        if (response.status === 200) {
            setOpen(true);
            setTimeout(() => {
                navigate("/categories");
            }, 2000);
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
                                <td><label>Category name: </label></td>
                                <td>
                                    <input
                                        required
                                        type="text"
                                        name="name"
                                        value={inputs.name || ""}
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
                    Category saved. Should be redirected to Category detail now
                </Alert>
            </Snackbar>
        </>
    )
}
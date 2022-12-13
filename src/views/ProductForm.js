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

    const { id } = useParams("id");
    if (id) {
        mode = 'edit';
    }

    async function fetchData() {
        await fetchCategories();
        if (id) {
            await fetchProduct();
        }
    }

    async function fetchProduct() {
        const response = await axios.get(`/products/${id}`);
        console.log(response);
        response.data.category = response.data.category.id;
        setInputs(response.data);
    }
    async function fetchCategories() {
        const response = await axios.get('/categories');
        console.log(response);
        setCategories(response.data);
        setInputs({category: response.data[0].id});
    }

    useEffect(() => {
        fetchData();
    }, [id]);

    async function save() {
        console.log("here")
        let params = { ...inputs, category: { id: inputs.category } };
        const response = mode === 'add' ? await axios.post('/products', params) : await axios.put(`/products/${id}`, params);
        console.log(response);
        if (response.status === 200) {
            setOpen(true);
            setTimeout(()=>{
                navigate("/products");
            },2000);
        }
    }

    const [inputs, setInputs] = useState({});
    const [categories, setCategories] = useState([]);

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
                                        required
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
                                        required
                                        min={0}
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
                                        required
                                        min={0}
                                        max={10}
                                        type="number"
                                        name="rating"
                                        value={inputs.rating || ""}
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td><label>Cagegory: </label></td>
                                <td>
                                    <select
                                        required
                                        name="category"
                                        value={inputs.category || 0}
                                        onChange={handleChange}
                                    >
                                        {categories.map(cat => {
                                            return <option key={cat.id} value={cat.id}>{cat.name}</option>;
                                        })}
                                    </select>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <input type="submit" value="Save" />
                </form>
            </Box>

            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Product saved. Should be redirected to Product detail now
                </Alert>
            </Snackbar>
        </>
    )
}
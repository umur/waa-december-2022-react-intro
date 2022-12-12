import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import data from './data';
import axios from 'axios';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useNavigate, NavLink } from 'react-router-dom';


export default function Products() {
    const navigate = useNavigate();

    const onAddProduct = () => {
        navigate("/products/add");
    }

    async function fetchProducts() {
        const response = await axios.get('/products');
        console.log(response);
        setProductsState(response.data);
    }

    React.useEffect(() => {
        fetchProducts();
    }, []);
    let initialState = data.products;
    const [productsState, setProductsState] = React.useState(initialState);

    return (

        <Box>
            <Box>
                <Button variant="contained" onClick={onAddProduct}>Add Product</Button>
            </Box>

            <TableContainer key="tc" component={Paper}>
                <Table key="t" sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead key="th">
                        <TableRow key="tr">
                            {
                                Object.keys(productsState[0]).map((k) => {
                                    return (<TableCell key={k}>{k}</TableCell>);
                                })
                            }
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody key="tb">
                        {
                            productsState.map(p => {
                                return (<TableRow
                                    key={'tr' + p.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    {
                                        Object.keys(p).map((k) => {
                                            return (<TableCell key={p[k]} component="th" scope="row">
                                                {p[k]}
                                            </TableCell>)
                                        })
                                    }
                                    <TableCell><NavLink to={'/products/edit/' + p.id}>Edit</NavLink></TableCell>
                                </TableRow>);
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
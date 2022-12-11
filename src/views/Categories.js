import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import data from './data';

const categories = data.categories;

export default function Categories() {
    return (

        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {
                            Object.keys(categories[0]).map((k) => {
                                return (<TableCell key={k}>{k}</TableCell>);
                            })
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        categories.map(p => {
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
                            </TableRow>);
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}
import { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { setUserData } from "../redux/userReducer";
import UserService from "../services/UsersService";

const Users = () => {
    const headers = useSelector(state => state.userReducer.headers);
    const users = useSelector(state => state.userReducer.usersData);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const getUsers = () => {
        UserService.getUsers(headers)
            .then(res => {
                console.log(res);
                dispatch(setUserData(res.data));
            }).catch(err => {
                console.error(err);
            });
    }
    
    useEffect(() => {
        if(JSON.stringify(headers) !== '{}'){
            getUsers();
        }
    }, [headers]);

    const getRow = (user, ind) => {
        return (
            <tr key={ind}>
                <td>{ind + 1}</td>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.email}</td>
                {/* <td>
                    <Button variant="primary">Edit</Button>{' '}
                    <Button variant="danger">Delete</Button>{' '}
                </td> */}
            </tr>
        )
    }

    const gotoAddUser = () => {
        navigate('/add-user');
    }

    return(
        <div className='col-md-8 products-container'>
            {/* <div className="add-product">
                <Button variant="primary" onClick={gotoAddUser}>Add User</Button>{' '}
            </div> */}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Email</th>
                        {/* <th>Action</th> */}
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, ind) => getRow(user, ind))
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Users;
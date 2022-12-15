import axios from "axios";
//import { useState } from "react";
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { lgContext } from "../App";
import { setName } from "../redux/userReducer";
import LoginForm from "./LoginForm";


const User = () => {
    //==================use context for language ==============
    const context = useContext(lgContext)

    //=====================navigator ==============

    const navigate = useNavigate()

    //====================== dispatch for reducer==============

    const dispatch = useDispatch();

    const fetchUsers = async () => {
        const users = await axios.get('http://localhost:8081/users');
        // console.log(users.data[0].firstName);
        //setName(users.data)
        dispatch(setName(users.data));
    }

    useEffect(() => {
        fetchUsers();
        context.changeColor("green");
    }, [])

    //let initialName = ["mark"];

    const nameState = useSelector((state) => state.userReducer.user);

    //const [nameState, setName] = useState(initialName);


    const userDetailHandeler = (id) => {
        navigate("/users/" + id)


    }
    //console.log(nameState);

    return (

        <div>
            <h1>{context.color}</h1>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col"><button type="button" className="btn btn-primary">Add Users</button></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        nameState.map((user, index) => {
                            return (
                                <tr key={index}>
                                    <td >{user.id}</td>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastname}</td>
                                    <td><button type="button" className="btn btn-secondary" onClick={() => userDetailHandeler(user.id)}>User Details</button> <button type="button" className="btn btn-secondary" >Edit</button></td>
                                </tr>
                            )
                        }
                        )
                    }

                </tbody>
            </table>

        </div>
    );

}
export default User;
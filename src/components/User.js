import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";


const User = () => {

    const navigate = useNavigate()

    const fetchUsers = async () => {
        const users = await axios.get('http://localhost:8081/users');
        console.log(users.data[0].firstName);
        setName(users.data)


    }

    useEffect(() => {
        fetchUsers();
    }, [])

    let initialName = ["mark"];

    const [nameState, setName] = useState(initialName);


    const userDetailHandeler = (id) => {
        navigate("/users/" + id)


    }
    console.log(nameState);

    return (

        <div>
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
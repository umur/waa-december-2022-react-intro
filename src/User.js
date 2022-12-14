

import { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router";
const User = () => {

    let initialName = [];

    const [usersName, setMyName] = useState(initialName);

    //const [navigate, setNavigate] = useState(initialName);
    const navigate= useNavigate();
   
    const userDetailsHandler = (id) => {
        //setMyName("");
        navigate("/userdetails/"+id)

    }

const fetchUser = async() => {
    const usersData=await axios.get("http://localhost:8081/users")
    console.log(usersData.data);
    setMyName(usersData.data)
}

useEffect(()=>{
    fetchUser();
},[]);
    return (<div>
        <h2>User Details</h2>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col"><button type="button" class="btn btn-info">addUser</button> </th>
                </tr>
            </thead>
            <tbody>

           {usersName.map(user=>{
            return(
                <tr>
                <td>{user.firstName}</td>
                <td>{user.lastname}</td>
                <td><button type="button" class="btn btn-success" onClick={()=>userDetailsHandler(user.id)}> UserDetails</button><button type="button" class="btn btn-success" >Edit</button></td>
            </tr>
            )

           })}

               



            </tbody>
        </table>
    </div>
    );
}

export default User;
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import React from "react";
import axios from "axios"


const UserDetail = () => {
    console.log("user details");
 const initialstate=
    {id:0,
    email:" ",
    firstName:" ",
    lastname:" ",
    reviews:[],
    roles:[]
};

const[details,setDetails]= useState(initialstate);
const {id}= useParams();

const fetchById = async() => {
  const usersData=await axios.get("http://localhost:8081/users/"+id)
   
    setDetails(usersData.data)
}
    useEffect(()=>{
        fetchById();
    },[])
    return (

        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>

                        <td>{details.id}</td>
                        <td>{details.firstName}</td>
                        <td>{details.lastname}</td>
                        <td>{details.email}</td>
                        <td>{details.roles}</td>

                    </tr>
                </tbody>
            </table>
        </div>);
}

export default UserDetail;
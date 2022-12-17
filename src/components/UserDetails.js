import axios from 'axios'
import React from 'react'

import { useState } from "react";
import { useEffect } from "react";
import { useParams } from 'react-router';

export const UserDetails = () => {

    const userInitial =
    {
        "id": 0,
        "email": "",
        "firstName": "",
        "lastname": "",
        "reviews": [

        ],
        "roles": [
            {
                "id": 0,
                "role": ""
            }
        ]
    }

    const { id } = useParams();

    const fetchUserByID = async () => {

        const user = await axios.get('http://localhost:8081/users/' + id);

        setName(user.data)


    }

    useEffect(() => {
        fetchUserByID();
    }, [])


    const [userDetail, setName] = useState(userInitial);


    console.log(id);
    console.log(userDetail);
    return (

        <div>
            First name : {userDetail.firstName}
            <br />
            Last name : {userDetail.lastname}
            <br />
            Email : {userDetail.email}

        </div>
    )
}

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

function Userdetails() {

     // console.log(id)


      
      //console.log(userState)

      const fetchUserById = async () => {
        const users = await axios.get("http://localhost:8080/users/"+id);
       // console.log(users.data)

        setName(users.data);
      };

      useEffect(() => {
        fetchUserById();
      }, []);

      const intialState={
        id:1,
        firstname:"",
        lastname:"",
        email:"",
   };

      const [userState, setName] = useState(intialState)
      const {id} = useParams();

    return (
        <div>
           <table className="table table-dark">
            
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">email</th>
        
          </tr>
        </thead>
        <tbody>
              <tr>
                <td>{userState.id}</td>
                <td>{userState.firstname}</td>
                <td>{userState.lastname}</td>
                <td>{userState.email}</td>
                <td></td>

              </tr>
        </tbody>
      </table>
        </div>
    );
};

export default Userdetails;
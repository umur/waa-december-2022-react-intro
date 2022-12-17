import axios from "axios";
import React, { useEffect } from "react";
import User from "./User";

export default function Users(props) {

  const [users, setUsers] = React.useState([]);

  const getUsers = async () => {

    const response = await axios.get("/users");
    setUsers(response.data);
  }

  useEffect(() => {
    getUsers();
  }, []); 


  return (

    persons.map((item) => {
      return (
        <User
          key={item.id} // keyword
          firstname={item.firstname}
          lastname={item.lastname}
          id={item.id}
        />
      )
    })

  )

}
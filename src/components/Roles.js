import axios from "axios";
import { useEffect, useState } from "react";

export default function Roles() {
  // console.log('INNNNNNN');

  const fetchRoles = async () => {
    const roles = await axios.get("http://localhost:8080/roles");
    setName(roles.data);
  };

  useEffect(() => {
    fetchRoles();
  }, []);

  let initialState = [];

  const [rolesState, setName] = useState(initialState);
   
  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Role</th>
          </tr>
        </thead>
        <tbody>
  { rolesState.map(user=>{
    return(

         <tr>
            <th scope="row">{user.id}</th>
            <td>{user.role}</td>
           
          </tr>
    
    );

  })}     
  
        </tbody>
      </table>
    </div>
  );
}

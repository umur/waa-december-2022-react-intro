import axios from "axios";
import { useEffect, useState } from "react";



const Role = () => {
  const initialRole = [];
  const[userRole,setUserRole]=useState(initialRole);

  const fetchRole=async()=>{
    const roleData = await axios.get("http://localhost:8081/roles");
    console.log(roleData);
    setUserRole(roleData.data);
  }
  useEffect(()=>{
    fetchRole();
  },[]);
  return (<div>
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Role</th>
      </tr>
    </thead>

    <tbody>
    {userRole.map(role=>
      <tr>
        <td>{role.id}</td>
        <td>{role.role}</td>
      </tr>
    
      )} 
    </tbody>
  </div>
  );
}

export default Role;
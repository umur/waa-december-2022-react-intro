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
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Role</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>{}</td>
           
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>{}</td>
        
          </tr>
        </tbody>
      </table>

      <h1> This is Roles Page</h1>
    </div>
  );
}

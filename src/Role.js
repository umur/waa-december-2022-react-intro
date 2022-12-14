import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
const Role = () => {

    let initialRole = ["Admin"];
    const [userRole, setRole] = useState(initialRole);

    const fetchRole = async () =>{
        const roles = await axios.get("http://localhost:8081/roles");
        //console.log(roles.data);
        setRole(roles.data);
    }
    useEffect(() => {
        fetchRole();
    }, [])
    console.log("jhd");
    // const fetchUser = async () => {
    //     const users = await axios.get("http://localhost:8081/users");
    //     //console.log(users.data[0].firstName);
    //     setName(users.data);
    //   };
    //   useEffect(() => {
    //     fetchUser();
    //   }, []);

    return ( 
        <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Role</th>
          </tr>
        </thead>
        
        <tbody>
        {userRole.map((x)=>{
            return(
          <tr>
            <th scope="row">{x.id}</th>
            <td>{x.role}</td>
          </tr>
          );
        })
          }
          
        </tbody>
      </table>
     );
}
 
export default Role;
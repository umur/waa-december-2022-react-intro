import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
const UserDetails = () => {
  // console.log("hi");

   const initialUser = {
    id: 0,
    email: "",
    firstName: "",
    lastname: "",
  };

  const [userSt, setDetails] = useState(initialUser);
  const {id} = useParams();
  console.log(id);



    const fetchUserById = async () => {
      const user = await axios.get("http://localhost:8081/users/"+id);
      //console.log(users.data[0].first_name);
      setDetails(user.data);
    };

    useEffect(() => {
        fetchUserById();
      }, []);

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">firstName</th>
            <th scope="col">lastName</th>
            <th scope="col">email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{userSt.id}</th>
            <td>{userSt.firstName}</td>
            <td>{userSt.lastname}</td>
            <td>{userSt.email}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserDetails;

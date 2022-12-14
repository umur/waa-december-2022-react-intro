import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
const User = () => {
  // const [st, setSt] = useState("Hafteab");
  let initialName = ["Haftab"];
  const [userName, setName] = useState(initialName);
  const navigate = useNavigate();
  const changeNameHandler = () => {
    //
  };
  const changeUserDetailHandler = (id) => {
    //
    navigate("/userdetails/" + id);
  };
  const fetchUser = async () => {
    const users = await axios.get("http://localhost:8081/users");
    console.log(users.data[0].firstName);
    setName(users.data);
  };
  useEffect(() => {
    fetchUser();
  }, []);
  //   const [userDetails, setDetails] = useState(initialUser);
  //   const params = useParams()

  //   const initialUser={
  //   "id":0,
  //   "email":"",
  //   "firstName":"",
  //   "lastname":"",
  // }
  // const fetchUserUser = async () => {
  //     const users = await axios.get("http://localhost:8081/users/"+params.id);
  //     //console.log(users.data[0].first_name);
  //     setDetails(user.data);
  //   };

  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">FirstName</th>
            <th scope="col">Lastname</th>
            <th scope="col">
              <button type="button" className="btn btn-dark">
                AddUsers
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {userName.map((user) => {
            return (
              //arrow function should return
              <tr>
                <td scope="row">{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastname}</td>
                <td></td>

                <td>
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={() => changeUserDetailHandler(user.id)}
                  >
                    UserDetail
                  </button>
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={changeNameHandler}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default User;

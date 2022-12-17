import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
// import { saveusers } from "./redux/userReducer";
import { saveusers } from "../redux/userReducer";

export function Users() {

  const userState = useSelector((state) => state.userReducer.user);

  const dispatch = useDispatch();

  const fetchUser = async () => {

    const users = await axios.get("http://localhost:8080/users");
    console.log(users.data);
    // setName(users.data);s
    dispatch(saveusers(users.data));
  };

  useEffect(() => {
    fetchUser();
  }, []);

  //let intialState = [];
  //const [userState, setName] = useState(intialState);

  const navigate = useNavigate();

  const userDetailHandler = (id) => {
    navigate("/userdetails/" + id);
  };

  return (
    <div>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col"></th>
            <th scope="col">
              <button type="button" className="btn btn-primary">
                Add User
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {userState.map((user, index) => {
            return (
              <tr>
                <td>{user.id}</td>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td></td>
                <td>
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={() => userDetailHandler(user.id)}
                  >
                    User Details
                  </button>
                  <button type="button" className="btn btn-success">
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
}

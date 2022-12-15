import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const AddRole = () => {

    const addRoleformRef = useRef();
    const navigate = useNavigate();

    const addRole = async (roleData) => {
        await axios.post("http://localhost:8081/roles", roleData)
    }

    const addRoleHandeler = (event) => {
        event.preventDefault();
        const roleData = {
            role: addRoleformRef.current.roleName.value

        }
        console.log(roleData);
        addRole(roleData);
        navigate("/roles/");
    }

    return (
        <div>
            <form ref={addRoleformRef} onSubmit={addRoleHandeler}>
                <div>
                    <label htmlFor=""> Role id</label>
                    <br />
                    <input type="text" placeholder="id" name="roleId" />
                    <br />
                    <label htmlFor="">Role Name </label>
                    <br />
                    <input type="text" name="roleName" placeholder="Role name" />
                    <br />
                    <br />
                    <button type="submit">Add Role</button>
                </div>
            </form>
        </div>
    );
}
export default AddRole;
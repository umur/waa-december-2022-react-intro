//import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setStatusCode } from "../redux/deleteRoleSlicer";

export const DeleteButton = (props) => {

    //const initialDeleteStatusCode = true;

    const statusCode = useSelector((state) => state.deleteRoleReducer.initialDeleteStatusCode)

    const dispatch = useDispatch();

    //const [statusCode, setStatusCode] = useState(initialDeleteStatusCode)

    const deleteRoleHandeler = async (roleId) => {
        const role = parseInt(roleId)
        console.log(`================${roleId}`)
        const result = await axios.delete('http://localhost:8081/roles/' + role)
        if (result.status === 200) {
            dispatch(setStatusCode(!statusCode));
        }

        // console.log(result.status);
    }

    return (
        <div>
            {console.log(props)}
            <button type="button" className="btn btn-danger" onClick={() => deleteRoleHandeler(props.id)} >Delete</button>
        </div>

    )
}
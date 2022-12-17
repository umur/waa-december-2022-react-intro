import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { DeleteButton } from "./DeleteButton";

const Role = () => {

    let initialState = [];

    //===================Hooks=============================
    let formstate = {
        name: ""
    }
    const [formData, setFormData] = useState(formstate)
    const navigate = useNavigate();

    // const initialDeleteStatusCode = true;
    // const [statusCode, setStatusCode] = useState(initialDeleteStatusCode)

    //====================event  handelers ==================

    const getFormDataHandaler = (event) => {
        setFormData({ ...formData, name: event.target.value });
        console.log(formData);
    }

    const addRoleHAndeler = () => {
        navigate("/addRole/");
    }

    // const deleteRoleHandeler = async (roleId) => {
    //     const role = parseInt(roleId)
    //     console.log(`================${roleId}`)
    //     const result = await axios.delete('http://localhost:8081/roles/' + role)
    //     if (result.status === 200) {
    //         setStatusCode(!statusCode);
    //     }

    //     console.log(result.status);
    // }
    //===================================== fetch data ====================================

    const fetchRoles = async () => {
        const roles = await axios.get('http://localhost:8081/roles');
        //console.log(roles.data);
        setRoleState(roles.data);
        navigate("/roles/")
    }

    const statusCode = useSelector(state => state.deleteByIdReducer.initialDeleteStatusCode)
    console.log("=============" + statusCode);
    //=========================== useState to put the data in local context =================
    const [roleState, setRoleState] = useState(initialState);

    //========================== useEffct  run the get data fucntion=========================
    useEffect(() => {
        fetchRoles();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [statusCode])



    console.log(roleState);

    return (
        <div>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Role name</th>
                        <th scope="col"><button type="button" className="btn btn-primary" onClick={addRoleHAndeler}>Add Roles</button></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        roleState.map((r, index) => {
                            return (
                                <tr key={index}>
                                    <td >{r.id}</td>
                                    <td>{r.role}</td>
                                    <td>
                                        <button type="button" className="btn btn-primary">Role Details</button>
                                        <button type="button" className="btn btn-secondary" >Edit</button>
                                        <DeleteButton id={r.id} endPoint='roles/'></DeleteButton>
                                        {/* <button type="button" className="btn btn-danger" onClick={() => deleteRoleHandeler(r.id)} >Delete</button> */}
                                    </td>
                                </tr>
                            )
                        }
                        )
                    }

                </tbody>
            </table>

            <div className="mb-3">
                <label >Name</label>
                <input type="text"
                    className="form-control" name="" id="" aria-describedby="helpId" placeholder="" value={formData.name} onChange={getFormDataHandaler} />
                <small id="helpId" className="form-text text-muted">Help text</small>
            </div>

        </div>
    )

}
export default Role;
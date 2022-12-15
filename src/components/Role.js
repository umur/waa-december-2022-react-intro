import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Role = () => {

    let initialState = [];
    //=======================form data=======================
    let formstate = {
        name: ""
    }
    //===================form state=============================
    const [formData, setFormData] = useState(formstate)

    //====================event  handelers ==================

    const getFormDataHandaler = (event) => {
        setFormData({ ...formData, name: event.target.value });
        console.log(formData);
    }

    const navigate = useNavigate();
    const addRoleHAndeler = () => {
        navigate("/addRole/");
    }

    //===================================== fetch data ====================================

    const fetchRoles = async () => {
        const roles = await axios.get('http://localhost:8081/roles');
        //console.log(roles.data);
        setRoleState(roles.data);
    }

    //=========================== useState to put the data in local context =================
    const [roleState, setRoleState] = useState(initialState);

    //========================== useEffct  run the get data fucntion=========================
    useEffect(() => {
        fetchRoles();
    }, [])



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
                                    <td><button type="button" className="btn btn-secondary">Role Details</button> <button type="button" className="btn btn-secondary" >Edit</button></td>
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
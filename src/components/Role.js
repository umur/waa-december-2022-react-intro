import axios from "axios";
import { useEffect, useState } from "react";

const Role = () => {

    let initialState = [];

    let formstate = {
        name: ""
    }

    const [formData, setFormData] = useState(formstate)

    const getFormDataHandaler = (event) => {
        setFormData({ ...formData, name: event.target.value });
        console.log(formData);
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
                        <th scope="col"><button type="button" className="btn btn-primary">Add Roles</button></th>
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
                <small id="helpId" class="form-text text-muted">Help text</small>
            </div>

        </div>
    )

}
export default Role;
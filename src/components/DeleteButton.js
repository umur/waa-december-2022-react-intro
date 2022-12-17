//import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setStatusCode } from "../redux/deleteByIdSlicer";

export const DeleteButton = (props) => {


    const deleteStatusCode = useSelector((state) => state.deleteByIdReducer.initialDeleteStatusCode)

    const dispatch = useDispatch();


    const deleteRoleHandeler = async (id, endPoint) => {
        id = parseInt(id)
        const result = await axios.delete('http://localhost:8081/' + endPoint + id)

        if (result.status === 200) {
            dispatch(setStatusCode(!deleteStatusCode));
        }
    }

    return (
        <button type="button" className="btn btn-danger" onClick={() => deleteRoleHandeler(props.id, props.endPoint)} >Delete</button>
    )
}
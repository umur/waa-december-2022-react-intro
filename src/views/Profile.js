import React from "react";
import { getUser } from "../utils/auth";

export default function Profile() {
    let user = getUser();

    return (
        <>
            <h1>
                Profile
            </h1>
            <h2>
                First name: {user.firstname}
            </h2>
            <h2>
                Second name: {user.lastname}
            </h2>
        </>
    );
}
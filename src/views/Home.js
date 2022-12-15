import React from "react";
import { getUser } from "../utils/auth";

export default function Home() {
    let user = getUser();

    return (
        <>
            <h1>
                Hi {user.firstname}!
            </h1>
            <h2>
                Welcome to WAA React App
            </h2>
        </>
    );
}
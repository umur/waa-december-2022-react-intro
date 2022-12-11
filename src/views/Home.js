import React from "react";
import { isLoggedIn } from "../utils/auth";

export default function Home() {
    let loggedIn = isLoggedIn();
    return (
        <>
            <h1>
                Welcome to WAA React App;
            </h1>
            <h2>
                {loggedIn ? 'IsLogged in' : "Not logged in"}
            </h2>
        </>
    );
}
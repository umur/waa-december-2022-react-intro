//import React from 'react'
import { Link } from "react-router-dom";

function NavHeader() {
    return (
        <div>
            <Link className="navbar-brand" to="#">Lab 5</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        </div>
    );
}

export default NavHeader;
import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      About
      <Link to="/" className="btn">
        Back
      </Link>
    </div>
  );
}

export default About;

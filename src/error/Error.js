import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <section className="section">
      <h4>404</h4>
      <p>This is Error page</p>
      <Link to="/">Back</Link>
    </section>
  );
}

export default Error;

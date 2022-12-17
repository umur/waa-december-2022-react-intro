import React from "react";

function Dashboard({ user }) {
  return (
    <section className="section">
      <h4>Hello, {user?.email} </h4>
    </section>
  );
}

export default Dashboard;

import { useState } from "react";

const Signup = () => {
    
    let [user,setUser] =useState({
        fname:"",
        lname:"",
        email:"",
        password:""
    });

  const onSubmitHandler = (event) => {
    event.preventDefault();

    throw new Error("test");

    console.log("user",user);

    setUser({
        fname:"",
        lname:"",
        email:"",
        password:""
    });
  };

  const onChangeTextHandler=(event)=>{
    setUser({
        ...user,
        [event.target.name]:event.target.value
    });
};

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="fname">Firstname</label>
        <input
          id="fname"
          type="text"
          name="fname"
          onChange={onChangeTextHandler}
        />
        <label htmlFor="lname">Lastname</label>
        <input
          id="lname"
          type="text"
          name="lname"
          onChange={onChangeTextHandler}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          name="email"
          onChange={onChangeTextHandler}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          onChange={onChangeTextHandler}
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Signup;
import { useState } from "react";

const Login= ()=>{
     let [message,setMessage] = useState("");

    let [user,setUser] = useState({
        username:"",
        password:""
    });

    const onChangeTextHandler=(event)=>{
        setUser({
            ...user,
            [event.target.name]:event.target.value
        });
    };

    const onSubmitHandler=(event)=>{
        event.preventDefault();
        if(user.username === "sally@gmail.com" && user.password==="sally1234"){
            setMessage("succesfull login!");
        }
        else{
            setMessage("login failed!");
        }
    };

    return (
        <form onSubmit={onSubmitHandler}>
            <label htmlFor="username">Username</label>
            <input id='username' type="text" name="username" onChange={onChangeTextHandler}/>
            <label htmlFor="password">Password</label>
            <input id="password" type="password" name="password" onChange={onChangeTextHandler}/>

            <button type="submit">Login</button>
            <p>{message}</p>
        </form>
    )
};

export default Login;
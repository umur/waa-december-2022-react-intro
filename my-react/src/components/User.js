import React, { useEffect } from 'react';
const User = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const navigate = useNavigate();
    const nameHandler = (e) => {
        dispatch({ type: "SET_NAME", payload: e.target.value });
    }
    const emailHandler = (e) => {
        dispatch({ type: "SET_EMAIL", payload: e.target.value });
    }
    const passwordHandler = (e) => {
        dispatch({ type: "SET_PASSWORD", payload: e.target.value });
    }
    const userDetailHandler = (e) => {
        navigate("/userdetails");
    }
    const fetchUser = async () => {
        const res = await axios.get("http://localhost:8000/api/users");
        dispatch({ type: "SET_USER", payload: res.data });
    }
    useEffect(() => {
        fetchUser();
    }, [])
    return (
        <div>
            <h1>User</h1>
            <div>
                <label>Name</label>
                <input type="text" onChange={nameHandler} />
            </div>
            <div>
                <label>Email</label>
                <input type="text" onChange={emailHandler} />
            </div>
            <div>
                <label>Password</label>
                <input type="text" onChange={passwordHandler} />
            </div>
            <button onClick={userDetailHandler}>User Details</button>
        </div>
        
    )
}

export default User;
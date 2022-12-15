import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import UserService from "../services/UsersService";

const Home = () => {
    const navigate = useNavigate('/login');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const getUser = (email) => {
        UserService.getuserByEmail(email)
            .then(res => {
                setFirstname(capitalizeFirstLetter(res.data.firstname));
                setLastname(capitalizeFirstLetter(res.data.lastname));
            }).catch(err => {
                console.error(err);
                localStorage.clear();
                gotoLogin();
            })
    } 

    const gotoLogin = () => {
        navigate('/login');
    }

    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if(token) {
            const email = jwtDecode(token)['sub'];
            getUser(email);
        } else {
            gotoLogin();
        }
    }, []);

    
    return(
        <div>
            <h1>Welcome {firstname + " " + lastname}</h1>
        </div>
    )
}

export default Home;
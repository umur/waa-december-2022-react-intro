import axios from "axios";

const UserService = {
    getuserByEmail: (email, headers) => {
        return axios.get(`/users/user-by-email?email=${email}`, {headers: {Authorization: `Bearer ${localStorage.getItem('accessToken')}`}});
    },
    getUsers: (headers) => {
        return axios.get('/users', {headers});
    }
};

export default UserService;
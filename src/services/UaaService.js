import axios from "axios";

const UaaService = {
    login: (email, password) => {
        return axios.post('/uaa/login', {email, password});
    },
    register: (email, firstname, lastname, password) => {
        return axios.post('/uaa/register', {email, firstname, lastname, password, roles: [{id: 2, role: 'GOLD'}]});
    }
};

export default UaaService;
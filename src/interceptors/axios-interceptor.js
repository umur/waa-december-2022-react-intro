import axios from "axios";

//set baseURL
axios.defaults.baseURL = "http://localhost:8080";

//request 
axios.interceptors.request.use(
    (req) => {
        const token = localStorage.getItem('token');
        if(token) {
            req.headers['Authorization'] = 'Bearer ' + token;
        }
        return req;
    }, 
    error => {
        return Promise.reject(error);
    }
);

//response
axios.interceptors.response.use(
    (res) => {
        return res;
    }, 
    error => {
        if(error.response.status > 300){
            localStorage.removeItem('token');
        }
        return Promise.reject(error);
    }
);

import axios from 'axios';
import { getToken } from './auth';


export function httpInterceptor() {
    axios.interceptors.request.use(request => {
        console.log("in interceptor");

        //Add base url
        request.url = request.url.replace(process.env.REACT_APP_API_URL, ""); //hack to handle url corruption during double execution. reason unknown
        request.url = process.env.REACT_APP_API_URL + request.url;

        //check for token and add to authorization header if token available;
        const token = getToken();
        if (token) {
            request.headers.Authorization = `Bearer ${token}`;
        }

        return request;
    });
}
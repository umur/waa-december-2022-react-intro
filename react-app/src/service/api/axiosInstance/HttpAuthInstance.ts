import axios from 'axios';
import { getToken, setToken } from '../../../utils/localStorage';
import { redirect } from "react-router-dom";
import { getRefreshToken } from '../login';
const statusCode = [401,402,403]
const HttpAuthInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        "Authorization": "Bearer" + " " + getToken("token").accessToken
    }
})


HttpAuthInstance.interceptors.response.use((response) => {
    return response;
}, (error) => {
    if (statusCode.indexOf(error?.response?.status) !== -1) {
       
     getRefreshToken(getToken("token")?.refreshToken).then(res=>setToken("token",res?.data))
    }
})

export default HttpAuthInstance;
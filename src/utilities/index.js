import { setLogIn } from "../redux/userReducer"

export const handleError = function(error, dispatch){
    console.log(error);
    if(error.response.status === 401 || error.response.status === 403)
        dispatch(setLogIn(false));
}
import { setErrorMessage, setSuccessMessage } from "../redux/appReducer";
import { setLogIn } from "../redux/userReducer"

export const handleError = function(error, dispatch){
    if(error.response.status === 401 || error.response.status === 403){
        dispatch(setSuccessMessage(''));  
        dispatch(setErrorMessage('Unauthorized! Please login to update.'));  
        dispatch(setLogIn(false));
    }
}

export const handleSuccess = function(message, dispatch){
    dispatch(setErrorMessage('')); 
    dispatch(setSuccessMessage(message));  
}
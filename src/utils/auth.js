const isLoggedIn = () => {
    if (localStorage.getItem("token") == null)
        return false;
    return true;
}

const getToken = () => {
    return isLoggedIn() ? localStorage.getItem("token") : null;
}

const processToken = (token) => {
    localStorage.setItem("token", token);
    return true;
}

const logout = () => {
    localStorage.clear();
}

module.exports = { isLoggedIn, processToken, logout, getToken };
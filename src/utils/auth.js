const isLoggedIn = () => {
    console.log("token",localStorage.getItem("token"));
    if (localStorage.getItem("token") == null)
        return false;
    return true;
}

const processToken = (token) => {
    localStorage.setItem("token", token);
    return true;
}

const logout = () => {
    localStorage.clear();
}

module.exports = { isLoggedIn, processToken, logout };
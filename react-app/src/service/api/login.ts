import HttpRequest from "./axiosInstance/HttpRequestInstance";

export const login = async (data) => {
    return await HttpRequest.post("/uaa", data);
}


export const getRefreshToken = async (data) => {
    return await HttpRequest.post("/refreshToken", data);
}
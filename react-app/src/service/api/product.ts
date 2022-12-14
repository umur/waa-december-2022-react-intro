import HttpAuthInstance from "./axiosInstance/HttpAuthInstance"

export const getProducts = async () => {
    return HttpAuthInstance.get("/products");
}


export const addProducts = async (data) => {
    return HttpAuthInstance.post("/products", data);
}
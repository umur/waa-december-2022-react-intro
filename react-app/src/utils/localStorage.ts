interface TokenSchema{
    accessToken: string,
    refreshToken:string,
    
}
export const getToken = (item: string): TokenSchema => {

    const stringifiedToken: string = localStorage.getItem(item);
    return JSON.parse(stringifiedToken);
}

export const setToken = (item: string, data: TokenSchema) => {
    const stringifiedToken:string = JSON.stringify(data);
    return localStorage.setItem(item, stringifiedToken);
}


export const removeToken = (item: string) => {
    return localStorage.removeItem(item);
}
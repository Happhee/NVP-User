import axiosInstance from "./axiosInstance";

axiosInstance.defaults.withCredentials = true;

//요청 객체 
export const request = (method, url, data) => {
    return axiosInstance({
        method,
        url: url,
        data
    })
}



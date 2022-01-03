import axiosInstance from './axiosInstance';

axiosInstance.defaults.withCredentials = true

export const request = (method, url, data) => {


    return axiosInstance({
        method,
        url: url,
        data,
    })



};

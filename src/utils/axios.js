import axiosInstance from './axiosInstance';

export const request = (method, url, data) => {

    return axiosInstance({
        method,
        url: url,
        data,
    })
        .then((res) => res.data)
        .catch((err) => console.log(err));
    // return axios({
    //     method,
    //     url: DOMAIN + url,
    //     data,
    // })
    //     .then((res) => res.data)
    //     .catch((err) => console.log(err));
};




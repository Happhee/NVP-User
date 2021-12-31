import axios from "axios";

const DOMAIN = "";
axios.defaults.withCredentials = true; // 쿠키 데이터를 전송받기 위해å
export const request = (method, url, data) => {

    return axios({
        method,
        url: DOMAIN + url,
        data,
    })
        .then((res) => res.data)
        .catch((err) => console.log(err));
};




import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

const USER_URL = "http://52.152.236.81:8080/api"
const axiosInstance = axios.create({
    baseURL: USER_URL,

});
let refreshToken = '';

AsyncStorage.getItem('refreshToken')
    .then((value) => {
        console.log(value)
        if (value != null) {
            refreshToken = value

        }
    });

console.log("음" + refreshToken)
//요청 가로채기
axiosInstance.interceptors.request.use(
    //요청 보내기전 수행
    function (config) {
        config.headers['Authorization'] = `Bearer ${refreshToken}`
        return config
    },
    //오류 요청
    function (err) {
        return Promise.reject(err)
    }
)

//응답 가로채기
axiosInstance.interceptors.response.use(
    //200대 응답 
    function (res) {
        return res
    },
    // //200 이외 응답
    async function (err) {
        console.log(err.config);
        console.log(err);
        //     const {
        //         config,
        //         res: { status },
        //     } = err;

        //     if (status === 401) {
        //         //토큰 만료시
        //         if (!err.res.ok) {
        //             const originalReq = config;
        //             const refreshToken = await AsyncStorage.getItem('refreshToken');
        //             if (refreshToken) {
        //                 const { data } = await axios.post(
        //                     USER_URL + '/users/refresh',
        //                     { refreshToken },
        //                 );

        //                 const {
        //                     accessToken: newAccessToken,
        //                     refreshToken: newRefreshToken
        //                 } = data;

        //                 await AsyncStorage.multiSet([
        //                     ['accessToken', newAccessToken],
        //                     ['refreshToken', newRefreshToken]
        //                 ]);

        //                 axios.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
        //                 originalReq.headers.Authorization = `Bearer ${newAccessToken}`;
        //                 return axios(originalReq);
        //             }
        //         }
        //     }
        return Promise.reject(err);
    }
)

export default axiosInstance;
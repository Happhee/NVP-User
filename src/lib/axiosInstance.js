import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

const USER_URL = "http://52.152.236.81:8080/api"
const axiosInstance = axios.create({
    baseURL: USER_URL,

});
console.log('리프레시1');

// AsyncStorage.getItem('refreshToken')
//     .then((refreshToken) => {
//         axiosInstance.defaults.headers = `Bearer ${refreshToken}`

// });



//요청 가로채기
axiosInstance.interceptors.request.use(

    //요청 보내기전 수행
    async config => {
        console.log(config);
        const refreshToken = await AsyncStorage.getItem('refreshToken');
        if (refreshToken) {
            config.headers['Authorization'] = `Bearer ${refreshToken}`

        }

        return config;
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
        console.log('응답')
        return res.data
    },
    // //200 이외 응답
    async function (err) {
        console.log('에러ㅓ')
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

console.log(axiosInstance);
export default axiosInstance;
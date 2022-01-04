import axiosInstance from "../../lib/axiosInstance";
import { CERTIFICATE_UPLOAD, CERTIFICATE_UPLOAD_FAILURE, CERTIFICATE_UPLOAD_SUCCESS } from "./actionTypes";

const CERTIFICATE_URL = '/certificate';

export const uploadCertificate = (formData) => {
    console.log('파일 업로드 하기')
    console.log(formData);
    const config = {
        headers: { 'content-type': 'multipart/form-data' }
    }
    return (dispatch) => {
        dispatch(uploadCertificateRequest())
        axiosInstance.post(CERTIFICATE_URL + '/upload', formData, config)
            .then((res) => {
                console.log(res.data);
                console.log('파일 업로드 하기 성공')

                dispatch(uploadCertificateSuccess(res.path, res.filename))
            })
            .catch((err) => {
                dispatch(uploadCertificateFailure(err));
            })

    }
}

export const uploadCertificateRequest = () => {
    return {
        type: CERTIFICATE_UPLOAD
    };
}
export const uploadCertificateSuccess = (vaccinePassFilePath, fileName) => {
    return {
        type: CERTIFICATE_UPLOAD_SUCCESS,
        vaccinePassFilePath: vaccinePassFilePath,
        fileName: fileName
    }
}

export const uploadCertificateFailure = (err) => {
    return {
        type: CERTIFICATE_UPLOAD_FAILURE,
        err: err
    }
}

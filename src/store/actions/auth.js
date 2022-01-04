import { REGISTER_ID_CARD, REGISTER_VACCINE_PASS, SET_PASSWORD, SIGN_UP, VERIFICATION_SMS_MESSAGE } from "./actionTypes";


const USERS_URL = "/users";


//인증 성공
export function verifySmsMessage(id, name, phone) {
    return {
        type: VERIFICATION_SMS_MESSAGE,
        id: id,
        name: name,
        phone: phone
    }
}

export function setPassword(passWord) {

    return {
        type: SET_PASSWORD,
        passWord: passWord
    }
}

export function setVaccinePass(vaccinePassName, vaccinePassFilePath, fileName) {
    return {
        type: REGISTER_VACCINE_PASS,
        vaccinePassName: vaccinePassName,
        vaccinePassFilePath: vaccinePassFilePath,
        fileName: fileName
    }
}

export function setIdCard(idCardName, idCardFilePath) {
    return {
        type: REGISTER_ID_CARD,
        idCardName: idCardName,
        idCardFilePath: idCardFilePath
    }
}


export function signup(dataToSubmit) {
    // const data = request("POST", USERS_URL + '/signup', dataToSubmit);

    return {
        type: SIGN_UP,
        payload: data,
        data: dataToSubmit
    }
}

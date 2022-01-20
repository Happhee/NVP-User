export function isPhoneNumber(phoneNumber) {
    const regex = new RegExp('^01([0|1|6|7|8|9])([0-9]{3,4})([0-9]{4})$');
    return regex.test(phoneNumber);
}

export function isName(name) {
    const regex = new RegExp('^[가-힣]{2,4}$');
    return regex.test(name);
}
export function getOcrName(description) {
    return description[description.indexOf("성명 Name") + 1];
}

export function getOcrDate(description) {
    return description[description.indexOf("접종일자 Date") + 1];
}

export function getOcrDose(description) {
    return description[description.indexOf("접종차수 Dose") + 1];
}

export function getManufactuer(description) {
    return description[description.indexOf("백신제조사 Manufacturer") + 1];
}

export function getRefImageName(imageName) {
    const currentImageName = imageName.split('/');

    return currentImageName[currentImageName.length - 1];
}
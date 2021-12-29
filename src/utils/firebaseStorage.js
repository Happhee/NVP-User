import storage from '@react-native-firebase/storage';
export function getRefImageName(imageName) {
    const currentImageName = imageName.split('/');

    return currentImageName[currentImageName.length - 1];
}
export function registerImage(imageName) {

    let refImageName = getRefImageName(imageName);
    let reference = storage().ref(refImageName);
    let task = reference.putFile(imageName);
    console.log("success")

    task.then(() => {
        console.log("Upload");
    }).catch((e) => {
        console.log(e)
        console.log("에러")
    });
}
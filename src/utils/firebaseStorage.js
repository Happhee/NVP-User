import storage from '@react-native-firebase/storage';

export function registerImage(imageName) {


    let currentImageName = imageName.split('/');
    let refImageName = currentImageName[currentImageName.length - 1];
    let reference = storage().ref(refImageName);
    let task = reference.putFile(imageName);
    console.log("success")
    console.log(currentImageName + " / " + reference);
    console.log(currentImageName.length);
    console.log(refImageName);
    task.then(() => {
        console.log("Upload");
    }).catch((e) => {
        console.log(e)
        console.log("에러")
    });
}
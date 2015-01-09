var typeAdd, callBack, errorCallBack;
function addPhoto(type, source, callback, errorCallback){
    showLoading();
    callBack = (typeof callback == 'function') ? callback : '';
    errorCallBack = (typeof errorCallback == 'function') ? errorCallback : '';
    typeAdd = type;
    navigator.camera.getPicture(onSuccessImage, onFailImage, {
        quality          : 80,
        encodingType     : 0,
        destinationType  : type,
        sourceType       : source,
        mediaType        : 0
        //        saveToPhotoAlbum : true
    });
}

function onSuccessImage(imageData){
    var url;
    if(!typeAdd){
        url = "data:image/jpeg;base64,"+imageData;
    }else{
        url = imageData;
    }
    callBack(url);
    hideLoading();
}

function onFailImage(message){
    errorCallBack();
    hideLoading();
    console.log('Failed because: '+message);
}
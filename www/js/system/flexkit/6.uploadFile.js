function uploadPhoto(imageURI, name, hashTags) {
    var options = new FileUploadOptions();
    options.fileKey="file";
    options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
    options.mimeType="image/jpeg";
    options.headers = {
        Connection: "close"
    };
    options.chunkedMode = false;

    var params = new Object();
    params.title = name;
    params.hashTags = hashTags;

    options.params = params;

    var ft = new FileTransfer();
    ft.upload(imageURI, encodeURI(serverIp+"upload"), successUpload, failUpload, options);
}

function successUpload(r) {
    console.log("Code = " + r.responseCode);
    console.log("Response = " + r.response);
    console.log("Sent = " + r.bytesSent);
    console.log(r.response);
    onBack(0);
    hideLoading();
}

function failUpload(error) {
    hideLoading();
    alert('Please try again...');
    console.log("An error has occurred: Code = " + error.code);
}
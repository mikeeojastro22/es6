const photos = [];

// async keyword - indicates that the function is asynchronous
async function photoUpload(){
    // uploadStatus - mimic uploading a photo - this can take time (slow internet connection)
    let uploadStatus = new Promise( (resolve, reject) => {
        setTimeout(() => {
            photos.push("picture");
            resolve("Photos uploaded");
        }, 3000);
    });

    // await keyword - this is the process that we want to wait for
    let result = await uploadStatus;
    console.log(result);
    console.log(photos.length);
}

photoUpload();
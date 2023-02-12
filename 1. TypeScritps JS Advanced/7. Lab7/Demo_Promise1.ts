// Check email
function callAPICheckEmail() {
    // @ts-ignore
    let promiseCheckEmail = new Promise(function (resolve, reject) {
        console.log("---Bước 1: Check email");
        let resultEmail = true;
        if(resultEmail) {
            reject("This is Email Exists");
        }else {
            resolve("Check Email Ok!")
        }
    });
    return promiseCheckEmail;
}

// Check Username
function callAPICheckUsername() {
    // @ts-ignore
    return new Promise(function (resolve, reject) {
        console.log("---Bước 2: Call API check username");
        const data = false;
        if(data) {
            reject("This username is Exists!");
        }else {
            resolve("Check Username ok")
        }
    });
}

// Creat Account
function callAPICreatAccount() {
    // @ts-ignore
    return new Promise(function (resolve, reject) {
        console.log("--- Bước 3: Call API creat account");
        let resultCreat = true;
        if(resultCreat) {
            resolve("Creat Account success!");
        }else {
            reject("An error has occurred!");
        }
    });
}
// Use
callAPICheckEmail()
    .then(function (msgSuccess) {
    console.log(msgSuccess);
    return callAPICheckUsername();
}).then(function (msgSuccess) {
    console.log(msgSuccess);
    return callAPICreatAccount();
}).then(function () {
    console.log("Tạo mới thành công")
}).catch(function (msgError) {
    console.log("Error");
    console.log(msgError);
});

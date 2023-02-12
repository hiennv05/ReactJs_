// Check email
function callAPICheckEmail() {
    console.log("---Bước 1: Check email----");
    //Ajax call api
    let resultEmail = false;
    return resultEmail;
}

// Check Username
async function callAPICheckUsername() {
    console.log("---Bước 2: Call API check username---");
    // true: Username da tồn tại
    const resultUsername = true;
    return resultUsername;
}

// Creat Account
function callAPICreatAccount() {
    //True: tạo mới thành công
    console.log("--- Bước 3: Call API creat account---");
    //Ajax call api
    let resultCreat = true;
    return resultCreat;
}
// Use
// @ts-ignore
async function creatNewAccount() {
    let resultEmail = callAPICheckEmail();
    if (resultEmail) {
        console.log("Email is Exists!");
        return;
    }

    let resultUsername = await callAPICheckUsername();
    if (resultUsername) {
        console.log("Username is Exists!");
        return;
    }

    let resultCreat = callAPICreatAccount();
    if (resultCreat) {
        console.log("Creat Account Success!");
    } else {
        console.log("Error")
    }
}

creatNewAccount();

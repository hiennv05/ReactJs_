var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Check email
function callAPICheckEmail() {
    console.log("---Bước 1: Check email----");
    //Ajax call api
    let resultEmail = false;
    return resultEmail;
}
// Check Username
function callAPICheckUsername() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("---Bước 2: Call API check username---");
        // true: Username da tồn tại
        const resultUsername = true;
        return resultUsername;
    });
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
function creatNewAccount() {
    return __awaiter(this, void 0, void 0, function* () {
        let resultEmail = callAPICheckEmail();
        if (resultEmail) {
            console.log("Email is Exists!");
            return;
        }
        let resultUsername = yield callAPICheckUsername();
        if (resultUsername) {
            console.log("Username is Exists!");
            return;
        }
        let resultCreat = callAPICreatAccount();
        if (resultCreat) {
            console.log("Creat Account Success!");
        }
        else {
            console.log("Error");
        }
    });
}
creatNewAccount();

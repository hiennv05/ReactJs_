import { api } from "./api"

let getListAccountAPI = () => {
    return api("GET", "accounts/", null)
}

let addNewAccountAPI = (accountNew) => {
    return api("POST", "accounts/", accountNew )
}

let deleteAccountAPI = (id) => {
    let url = "accounts/" + id;
    return api("DELETE", url, null);
}

let updateAccountAPI = (accountUpdate) => {
    let url = "accounts/" + accountUpdate.id;
    return api ("PUT", url, accountUpdate);
}
export  {getListAccountAPI, addNewAccountAPI, deleteAccountAPI, updateAccountAPI};
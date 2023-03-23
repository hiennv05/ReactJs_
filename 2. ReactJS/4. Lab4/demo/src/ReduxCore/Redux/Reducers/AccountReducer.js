import { ADD_ACCOUNT, DELETE_ACCOUNT } from "../Contants/ActionTypes";

let inittalState = {
    listAccount: [],
};
let AccountReducer = (state = inittalState, action) => {
    switch (action.type) {
        case ADD_ACCOUNT:
            let account = action.payload;
            let listAccountNew = state.listAccount;
            listAccountNew.push(account);
            return {
                ...state,
                listAccount: listAccountNew,
            };

        case DELETE_ACCOUNT:
            let id_delete = action.payload;
            let listAccDelete = state.listAccount;
            for (let index = 0; index < listAccDelete.length; index++) {
                if (listAccDelete[index].Id === id_delete) {
                    // splice xóa phần tử trong mảng theo index
                    listAccDelete.splice(index, 1);
                }
            }

            return {
                ...state,
                listAccount: listAccDelete,
            };

        default:
            return {
                ...state,
            };
    }
};
export default AccountReducer;

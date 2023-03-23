import { actionShowForm, actionCloseForm } from "./Redux/Actions/FormAction";
import { actionAdAccount, deleteAccount } from "./Redux/Actions/AccountAction";
console.log("----------Rexux----------");
// Store, Reducer, Action, Dispatch
const { createStore } = require("redux");
const { default: RootReducer } = require("./Redux/Reducers/RootReducer");

// B3: Khai báo các State được lưu trữ ở Store của Redux
// let inittalState = {
//     showForm: false,
//     listAccount: [],
// };
// Bươc 2: Tạo ra Reducer
// let reducer = (state = inittalState, action) => {
//     switch (action.type) {
//         case "SHOW_FORM":
//             // actionShowForm
//             // Redux khuyến cáo nên copy lại state cũ và state nào cần thay đổi thì thay đổi =>> Toán tử ...
//             return {
//                 ...state,
//                 showForm: true,
//             };
//         case "CLOSE_FORM":
//             return {
//                 ...state,
//                 showForm: false,
//             };

//         case "ADD_ACCOUNT":
//             let account = action.payload;
//             let listAccountNew = state.listAccount;
//             listAccountNew.push(account);
//             return {
//                 ...state,
//                 listAccount: listAccountNew,
//             };

//         case "DELETE_ACCOUNT":
//             let id_delete = action.payload;
//             let listAccDelete = state.listAccount;
//             for (let index = 0; index < listAccDelete.length; index++) {
//                 if (listAccDelete[index].Id === id_delete) { // splice xóa phần tử trong mảng theo index
//                     listAccDelete.splice(index, 1);
//                 }
//             }

//             return {
//                 ...state,
//                 listAccount: listAccDelete,
//             };

//         default:
//             return {
//                 ...state,
//             };
//     }
// };

// Bước 1 tạo ra Store của Redux (Nhận 1 reducer root làm tham số  =>> Reducer nhận state cũ và xuwr lý state theo yêu cầu của action)
// Root reducer sẽ cung cấp các state cho store
let storeRedux = createStore(RootReducer);

// Khai báo ACtion (đơn thuần là 1 object)

// let actionShowForm = {
//     type: "SHOW_FORM",
// };
// let actionCloseForm = {
//     type: "CLOSE_FORM",
// };

let accountNew = {
    Id: 1,
    Name: "ABC",
};
let accountNew2 = {
    Id: 2,
    Name: "AB2C",
};
// let actionAdAccount = {
//     type: "ADD_ACCOUNT",
//     payload: accountNew,
// };

// let idDelete = 1;
// let deleteAccount = {
//     type: "DELETE_ACCOUNT",
//     payload: idDelete,
// };
// Giả sử ng dùng nhấn nút Create New Account =>> Gửi Action lên Store
// console.log("State trước khi thay đổi: ", storeRedux.getState());
let idDelete = 1;
storeRedux.dispatch(actionShowForm)();

console.log("State sau khi thay đổi: ", storeRedux.getState());

storeRedux.dispatch(actionCloseForm)();
console.log("State sau khi Close Form: ", storeRedux.getState());

storeRedux.dispatch(actionAdAccount)(accountNew);
storeRedux.dispatch(actionAdAccount)(accountNew2);
console.log("State sau khi Add Account: ", storeRedux.getState());

storeRedux.dispatch(deleteAccount)(idDelete);
console.log("State sau khi delete Account: ", storeRedux.getState());

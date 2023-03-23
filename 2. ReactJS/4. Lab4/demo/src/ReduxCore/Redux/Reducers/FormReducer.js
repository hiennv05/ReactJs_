import { SHOW_FORM, CLOSE_FORM } from "../Contants/ActionTypes";
let inittalState = {
    showForm: false,
};

let FormReducer = (state = inittalState, action) => {
    switch (action.type) {
        case SHOW_FORM:
            // actionShowForm
            // Redux khuyến cáo nên copy lại state cũ và state nào cần thay đổi thì thay đổi =>> Toán tử ...
            return {
                ...state,
                showForm: true,
            };
        case CLOSE_FORM:
            return {
                ...state,
                showForm: false,
            };

        default:
            return {
                ...state,
            };
    }
};
export default FormReducer;
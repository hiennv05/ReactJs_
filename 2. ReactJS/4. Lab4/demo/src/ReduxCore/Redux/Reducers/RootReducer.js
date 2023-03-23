import { combineReducers } from "redux";
import AccountReducer from "./AccountReducer";
import FormReducer from "./FormReducer";

let RootReducer = combineReducers({
    accountReducer: AccountReducer,
    formReducer: FormReducer
});
export default RootReducer;
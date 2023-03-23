
import { combineReducers } from "redux";
import FormReducer from "./FormReducer";

let RootReducer = combineReducers({
    formReducer: FormReducer,
});
export default RootReducer;
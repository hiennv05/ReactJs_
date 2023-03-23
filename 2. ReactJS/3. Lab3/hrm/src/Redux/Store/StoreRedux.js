import { createStore } from "redux";
import RootReducer from "../Reducer/RootReducer";

const StoreRedux = createStore(RootReducer);

export default StoreRedux;
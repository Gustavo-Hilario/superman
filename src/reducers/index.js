import { SIGN_IN, SIGN_OUT } from "../actions/types";

// COMBINE ALL REDUCERS INTO THIS FILE
import { combineReducers } from "redux";

// IMPORT REDUCERS
import authReducer from "./authReducer";
import listReducer from "./listReducer";

export default combineReducers({
    auth: authReducer,
    list: listReducer,
});

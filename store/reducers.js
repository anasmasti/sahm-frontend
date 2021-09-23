import { combineReducers } from "redux";
import SharedReducer from "./Reducers/SharedReducer";


// COMBINED REDUCERS
const Reducers = {
    shared: SharedReducer,
};

export default combineReducers(Reducers);
import { combineReducers } from "redux";
import  UserReducer  from "./Reducers/users";

const rootReducer = combineReducers({
    InfoUser: UserReducer,
})

export default rootReducer; 
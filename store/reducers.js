import { combineReducers } from "redux";
import * as types from "./types";

// INITIAL COUNTER STATE
const initialCounterState = {
  count: 0,
};

// COUNTER REDUCER
const counterReducer = (state = initialCounterState, { type, payload }) => {
  switch (type) {
    case types.INCREMENT:
      return {
        count: payload.count,
      };
    default:
      return state;
  }
};

// COMBINED REDUCERS
const reducers = {
  counter: counterReducer,
};

export default combineReducers(reducers);

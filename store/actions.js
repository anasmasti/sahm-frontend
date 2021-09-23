import * as types from "./types";

// Update COUNTER
export const incrementCount = () => (dispatch) =>
  dispatch({
    type: types.INCREMENT,
    payload: {
      count: 1,
    },
  });

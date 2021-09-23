import * as types from "../Types/SharedTypes";


const initialSharedState = {
  darkNavbar: false
};

const SharedReducer = (
  state = initialSharedState,
  { type, payload }
) => {
  switch (type) {
    case types.SETNAVTHEME:
      return {
        darkNavbar: payload.darkNavbar
      }

    default:
      return state;
  }
};

export default SharedReducer;

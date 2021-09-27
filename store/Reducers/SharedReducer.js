import * as types from "../Types/SharedTypes";

const initialSharedState = {
  darkNavbar: false,
  darkLogo: false,
  isAdmin: false
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
    case types.SETLOGOTHEME:
      return {
        darkNavbar: payload.isAdmin
      }
    case types.SETISADMIN:
      return {
        darkNavbar: payload.darkLogo
      }

    default:
      return state;
  }
};

export default SharedReducer;

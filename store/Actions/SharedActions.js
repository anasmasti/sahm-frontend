import * as types from '../Types/SharedTypes';

export const SetNavbarTheme = (theme) => (dispatch) =>
  dispatch({
    type: types.SETNAVTHEME,
    payload: {
      darkNavbar: theme,
    },
  });

export const SetLogoTheme = (theme) => (dispatch) =>
  dispatch({
    type: types.SETLOGOTHEME,
    payload: {
      darkLogo: theme,
    },
  });

export const SetIsAdmin = (theme) => (dispatch) =>
  dispatch({
    type: types.SETISADMIN,
    payload: {
      isAdmin: true,
    },
  });
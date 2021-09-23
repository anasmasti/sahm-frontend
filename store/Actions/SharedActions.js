import * as types from '../Types/SharedTypes';

export const SetNavbarTheme = (theme) => (dispatch) =>
  dispatch({
    type: types.SETNAVTHEME,
    payload: {
      darkNavbar: theme,
    },
  });


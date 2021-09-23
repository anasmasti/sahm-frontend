import Router from "next/router";
import axios from "axios";
import * as t from "../types";
import { API } from "../../config";

import { setCookie } from "../../utils/cookie";

export const SignIn = (data) => {
  console.log('from stor' , data);
  return (dispatch) => {
    axios
      .post(`${API}/users/loggin`, data)
      .then((response) => {
        console.log(response.data);
        setCookie("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        // Router.push('/admin');
        dispatch({
          type: t.CONNECTED_USER,
          payload: response.data.user,
        });
        // Router.reload();
      })
      .catch((err) => {
        console.log("Error Action :", err.response.data.error);
        dispatch({
          type: t.ERROR,
          payload: err.response.data.error,
        });
      });
  };
};

export const ConnectedUser = (data) => ({
  type: t.CONNECTED_USER,
  payload: data,
});

// Update COUNTER
// export const incrementCount = (data) => (dispatch) =>
//   dispatch({
//     type: t.INCREMENT,
//     payload: {
//       count: data,
//     },
//   });

// Update COUNTER
export const incrementCount = () => (dispatch) =>
  dispatch({
    type: types.INCREMENT,
    payload: {
      count: 1,
    },
  });


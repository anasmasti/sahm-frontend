import * as t from "../types";


const initialCounterState = {
    nom: 0,
    prenom: 0,
    telephone: 0,
    type: 0,
    email: 0,
    password: 0,
    sexe: 0,
    ville: 0,
    code_postal: 0,
    adresse_livraison: 0,
  };

const UserReducer = (
  state = initialCounterState,
  action
) => {
  switch (action.type) {
    // case t.SIGN_UP:
    //   state = action.payload;
    //   return state;
    case t.SIGN_IN:
      state = action.payload;
      return state;
    case t.CONNECTED_USER:
      state = action.payload;
    //   console.log('from reducer : ' , action.payload );
      return state;
    // case t.FETCH_PRODUCTS:
    //   state = action.payload;
    //   return action.payload;
    case t.ERROR:
      alert(action.payload);
      return state;

    default:
      return state;
  }
};

export default UserReducer;

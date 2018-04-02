import * as actionTypes from './actions';

const initialState = {
  username: null,
  isAuthenticated: false,
  registerEmail: null,
  registerUsername: null,
  registerPassword: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USERNAME:
      return {
        ...state,
        username: action.username
      };
    case actionTypes.IS_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: action.value
      };
    case actionTypes.REGISTER_MAIL:
      return {
        ...state,
        registerEmail: action.email
      };
    case actionTypes.REGISTER_USERNAME:
      return {
        ...state,
        registerUsername: action.username
      };
    case actionTypes.REGISTER_PASSWORD:
      return {
        ...state,
        registerPassword: action.password
      };
    default:
      return state
  }
};

export default reducer;
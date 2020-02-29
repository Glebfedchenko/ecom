import * as actions from "./actions";

const initialState = {
  currentUser: null,
  isLoading: false,
  errorMessage: null
};
export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.SIGN_IN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        currentUser: payload
      };
    case actions.SIGN_UP_ERROR:
    case actions.SIGN_OUT_ERROR:
    case actions.SIGN_IN_ERROR:
      return {
        ...state,
        isLoading: true,
        errorMessage: payload
      };
    case actions.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        errorMessage: null
      };
    default:
      return state;
  }
};

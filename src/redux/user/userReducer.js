import * as actions from "./actions";

const initialState = {
  currentUser: null,
  isLoading: false,
  errorMessage: undefined
};
export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload
      };
    case actions.SET_CURRENT_USER_SUCCESS:
      return {
        ...state,
        currentUser: payload,
        isLoading: false
      };
    case actions.SET_CURRENT_USER_ERROR:
      return {
        ...state,
        isLoading: true,
        errorMessage: payload
      };
    default:
      return state;
  }
};

export const SET_CURRENT_USER = `SET_CURRENT_USER`;
export const SET_CURRENT_USER_SUCCESS = `SET_CURRENT_USER_SUCCESS`;
export const SET_CURRENT_USER_ERROR = `SET_CURRENT_USER_ERROR`;
export const SIGN_IN_ERROR = `SIGN_IN_ERROR`;
export const SIGN_IN_WITH_GOOGLE = `SIGN_IN_WITH_GOOGLE`;
export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  payload: user
});

export const setCurrentUserSuccess = user => ({
  type: SET_CURRENT_USER_SUCCESS,
  payload: user
});

export const setCurrentUserError = error => ({
  type: SET_CURRENT_USER_ERROR,
  payload: error
});

export const signInWithGoogle = () => ({});

export const signInError = error => ({
  type: SIGN_IN_ERROR,
  payload: error
});

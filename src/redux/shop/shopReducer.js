import * as actions from "./actions";
const initialState = {
  collections: null,
  isFetching: false,
  errorMessage: undefined
};

export const shopReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true
      };
    case actions.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        collections: payload,
        isFetching: false
      };
    case actions.FETCH_COLLECTIONS_ERROR:
      return {
        ...state,
        isFetching: false,
        errorMessage: payload
      };
    default:
      return state;
  }
};

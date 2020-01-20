import { call, put, fork, take } from "redux-saga/effects";
import { SET_CURRENT_USER, setCurrentUserError } from "./actions";

function* setUserWatcher() {
  while (true) {
    const { payload } = yield take(SET_CURRENT_USER);
    yield call(setUser, payload);
  }
}

function* setUser(payload) {
  try {
    yield console.log("hello");
  } catch (error) {
    yield put(setCurrentUserError(error));
  }
}
export default function* userSaga() {
  yield fork(setUserWatcher);
}

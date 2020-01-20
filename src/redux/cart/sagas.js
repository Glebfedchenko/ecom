import { fork, put, takeLatest } from "redux-saga/effects";
import { SIGN_OUT_SUCCESS } from "../user/actions";
import { clearCart } from "./actions";

function* clearCartOnSignOutWatcher() {
  yield takeLatest(SIGN_OUT_SUCCESS, clearCartOnSignOut);
}
function* clearCartOnSignOut() {
  yield put(clearCart());
}

export default function* cartSagas() {
  yield fork(clearCartOnSignOutWatcher);
}

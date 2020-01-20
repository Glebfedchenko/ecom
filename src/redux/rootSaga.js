import { all, fork } from "redux-saga/effects";
import shopSagas from "./shop/sagas";
import userSagas from "./user/sagas";

const sagas = [shopSagas, userSagas];

// Loop through all imported sagas and attach them to the root saga we export
export default function* rootSaga(services = {}) {
  yield all(sagas.map(saga => fork(saga, services)));
}

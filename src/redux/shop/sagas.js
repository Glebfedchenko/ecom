import { fork, call, put, takeEvery } from "redux-saga/effects";
import {
  FETCH_COLLECTIONS_START,
  fetchCollectionsError,
  fetchCollectionsSuccess
} from "./actions";
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase";

function* fetchCollectionsWatcher() {
  yield takeEvery(FETCH_COLLECTIONS_START, fetchCollections);
}

function* fetchCollections() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshop = yield collectionRef.get();
    const collectionMap = yield call(convertCollectionsSnapshotToMap, snapshop);
    yield put(fetchCollectionsSuccess(collectionMap));
  } catch (error) {
    yield put(fetchCollectionsError(error.message));
  }
}
export default function* shopSagas() {
  yield fork(fetchCollectionsWatcher);
}

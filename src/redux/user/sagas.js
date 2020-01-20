import { call, put, fork, takeLatest } from "redux-saga/effects";
import {
  SIGN_IN_WITH_EMAIL_START,
  SIGN_IN_WITH_GOOGLE_START,
  signInSuccess,
  signInError,
  CHECK_USER_SESSION,
  SIGN_OUT_START,
  signOutError,
  signOutSuccess,
  SIGN_UP_START,
  signUpError,
  signUpSuccess,
  SIGN_UP_SUCCESS
} from "./actions";
import {
  createUserProfileDocument,
  googleOauthProvider,
  auth,
  getCurrentUser
} from "../../firebase";

function* getSnapShotFromUserAuth(userAuth, additionalData) {
  try {
    const userRef = yield call(
      createUserProfileDocument,
      userAuth,
      additionalData
    );
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInError(error.message));
  }
}

function* googleSignInWatcher() {
  yield takeLatest(SIGN_IN_WITH_GOOGLE_START, signInWithGoogleSaga);
}

function* signInWithGoogleSaga() {
  try {
    const { user } = yield auth.signInWithPopup(googleOauthProvider);
    yield getSnapShotFromUserAuth(user);
  } catch (error) {
    yield put(signInError(error.message));
  }
}

function* emailSignInWatcher() {
  yield takeLatest(SIGN_IN_WITH_EMAIL_START, signInWithEmailSaga);
}

function* signInWithEmailSaga({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapShotFromUserAuth(user);
  } catch (error) {
    yield put(signInError(error.message));
  }
}

function* checkUserSessionWatcher() {
  yield takeLatest(CHECK_USER_SESSION, isUserAuthenticated);
}

function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapShotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signInError(error.message));
  }
}

function* signOutWatcher() {
  yield takeLatest(SIGN_OUT_START, signOut);
}
function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutError(error.message));
  }
}

function* onSignUpStart() {
  yield takeLatest(SIGN_UP_START, signUpSaga);
}

function* signUpSaga({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signUpSuccess({ user, additionalData: { displayName } }));
  } catch (error) {
    yield put(signUpError(error.message));
  }
}

function* onSignUpSuccess() {
  yield takeLatest(SIGN_UP_SUCCESS, signInAfterSignUp);
}

function* signInAfterSignUp({ payload: { user, additionalData } }) {
  yield getSnapShotFromUserAuth(user, additionalData);
}

export default function* userSaga() {
  yield fork(googleSignInWatcher);
  yield fork(emailSignInWatcher);
  yield fork(signOutWatcher);
  yield fork(checkUserSessionWatcher);
  yield fork(onSignUpStart);
  yield fork(onSignUpSuccess);
}

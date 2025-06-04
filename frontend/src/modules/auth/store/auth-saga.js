import { toast } from "react-toastify";
import { call, put, takeLatest } from "redux-saga/effects";
import authApi from "../services/auth-api";
import { authActions } from "./auth-slice";

function* loginHandler(action) {
  try {
    const { message } = yield call(authApi.login, action.payload);
    toast.success(message);
    yield put(authActions.loginSuccess());
  } catch (error) {
    yield put(authActions.loginFailure(error.message || "Login failed"));
  }
}

function* getCurrentUserHandler() {
  try {
    const { data } = yield call(authApi.getCurrentUser);
    yield put(authActions.getCurrentUserSuccess(data));
  } catch (error) {
    yield put(authActions.getCurrentUserFailure(error.message));
  }
}

export function* authSaga() {
  yield takeLatest(authActions.login, loginHandler);
  yield takeLatest(authActions.getCurrentUser, getCurrentUserHandler);
}

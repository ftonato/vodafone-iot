import axios from 'axios';
import { all, call, put } from "redux-saga/effects";
import { FETCH_BALANCE, FETCH_BALANCE_ERROR, FETCH_BALANCE_SUCCESS } from './actions';

function helloSaga() {
  console.log("We don't need to use Saga, but ...!");
}

const _fetchBalance = () => axios.get('https://demo9104838.mockable.io/currencies');
const fetchBalanceStart = () => ({ type: FETCH_BALANCE });
const fetchBalanceSuccess = data => ({ type: FETCH_BALANCE_SUCCESS, data });
const fetchBalanceError = error => ({ type: FETCH_BALANCE_ERROR, error });

function* fetchBalance() {
  try {
    yield put(fetchBalanceStart())
    const response = yield call(_fetchBalance);
    console.log("TCL: function*fetchBalance -> response", response)
    yield put(fetchBalanceSuccess(response.data));
  } catch (e) {
    yield put(fetchBalanceError(e));
  }
}

export default function* rootSaga() {
  yield all([
    helloSaga(),
    fetchBalance()
  ])
}

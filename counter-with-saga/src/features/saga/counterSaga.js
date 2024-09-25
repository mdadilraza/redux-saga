// sagas/counterSaga.js
import { put, takeEvery, call, takeLatest } from 'redux-saga/effects';
//import { decrementAsyncSuccess, fetchDataFailure, incrementAsyncSuccess } from '../slices/counterSlice';
 import { incrementAsyncSuccess, decrementAsyncSuccess, fetchDataSuccess, fetchDataFailure } from '../slices/counterSlice';

// Simulate a delay function (for async increment and decrement)
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

// Mock API call
const fetchDataApi = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .catch(error => { throw error });
};

// Worker saga: will be fired on 'counter/incrementAsync' action
function* incrementAsync() {
  yield call(delay, 1000); // Simulate a 1 second delay
  yield put(incrementAsyncSuccess());
}

// Worker saga: will be fired on 'counter/decrementAsync' action
function* decrementAsync() {
  yield call(delay, 1000); // Simulate a 1 second delay
  yield put(decrementAsyncSuccess());
}

// Worker saga: Fetch API data
function* fetchData() {
  try {
    const data = yield call(fetchDataApi);
    yield call(delay ,1000)
    yield put(fetchDataSuccess(data));
  } catch (error) {
    yield put(fetchDataFailure(error.toString()));
  }
}

// Watcher saga: watches for actions dispatched to the store
export function* watchFetch() {
  yield takeEvery('counter/incrementAsync', incrementAsync);
  yield takeEvery('counter/decrementAsync', decrementAsync);
  yield takeLatest('counter/fetchedData', fetchData);
}

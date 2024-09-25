// sagas/dataSaga.js
import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchDataRequest, fetchDataSuccess, fetchDataFailure } from '../slices/dataSlice';
import axios from 'axios'
// Simulated API call function
const fetchApi = () => {
  return axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.data)

    .catch(error => { throw error });
};

// Worker saga: this function runs when the action is dispatched
function* fetchDataSaga() {
  try {
    const data = yield call(fetchApi);
    
    // call API
    yield put(fetchDataSuccess(data));  // dispatch success action
  } catch (error) {
    yield put(fetchDataFailure(error.message));  // dispatch failure action
  }
}

// Watcher saga: watches for FETCH_DATA_REQUEST actions and runs fetchDataSaga
function* watchFetchData() {
  yield takeLatest('data/fetchDataRequest', fetchDataSaga);
}

export default watchFetchData;

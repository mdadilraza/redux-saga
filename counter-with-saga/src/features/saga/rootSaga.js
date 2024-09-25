// sagas/rootSaga.js
import { all } from 'redux-saga/effects';
import { watchFetch } from './counterSaga';
import watchFetchData from './dataSaga';

export default function* rootSaga() {
  yield all([
    watchFetch(), watchFetchData()// Add the counter saga watcher here
  ]);
}

import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import counterReducer from '../features/slices/counterSlice';
import dataReducer from '../features/slices/dataSlice'
import rootSaga from '../features/saga/rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
      counter: counterReducer,
      data:dataReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(sagaMiddleware), // Properly applying the middleware
  });

// Run the root saga
sagaMiddleware.run(rootSaga);

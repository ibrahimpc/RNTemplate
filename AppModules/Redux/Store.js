import {applyMiddleware, combineReducers, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import appSaga from './Sagas';
import appReducer from './Reducer/Reducers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, appReducer);
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware),
);

export const persistor = persistStore(store);
sagaMiddleware.run(appSaga);

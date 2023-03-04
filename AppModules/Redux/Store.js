import {applyMiddleware, combineReducers, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import appSaga from './Sagas';
import appReducer from './Reducer/Reducers';

const sagaMiddleware = createSagaMiddleware();
const combineReducer = combineReducers({appReducer});
const store = createStore(combineReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(appSaga);
export default store;

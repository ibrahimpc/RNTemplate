import {takeLatest, put} from 'redux-saga/effects';
import {GET_SAMPLE_DATA, RECEIVE_SAMPLE_DATA} from './Types';

function* checkingAPIcall() {
  try {
    const text = yield fetch('https://reactnative.dev/movies.json')
      .then(response => response.json())
      .then(json => {
        return json.movies;
      })
      .catch(error => {
        console.error(error);
      });
    console.log(text, 'text');
    yield put({type: RECEIVE_SAMPLE_DATA, payload: text});
  } catch (e) {
    console.log('api call fails');
  }
}

export default function* appSaga() {
  yield takeLatest(GET_SAMPLE_DATA, checkingAPIcall);
}

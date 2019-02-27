import { takeEvery, call, put } from "redux-saga/effects";
import {REQUEST_DATA_P2} from '../../actions'
import {error} from '../../actions'
import {data_recieved} from '../../actions'
import request_data from '../../actions'

export default function* watcherSaga() {
  yield takeEvery(REQUEST_DATA_P2, workerSaga);

}
function* workerSaga() {
  try {
    console.log("saga triggered")
    const payload = yield call(getData);
    yield put(data_recieved(payload));
  } catch (e) {
    console.log(e)
    yield put(error);
  }
}


  function getData() {

    return fetch("https://jsonplaceholder.typicode.com/posts").then(response =>
      response.json()
    );
  }

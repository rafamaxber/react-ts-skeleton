
import { all, fork } from 'redux-saga/effects';
import { Injector } from '/business-rules/types';
import { loadSaga } from './template/sagas';

export default function* rootSaga(injector: Injector) {
  try {
    yield all([
      fork(loadSaga, injector),
    ]);
  } catch (e) {
    throw e;
  }
}

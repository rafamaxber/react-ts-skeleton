import {
 all, takeLatest, call, put,
} from 'redux-saga/effects';
import { TemplateTypes } from './types';
import { Injector, TemplateDomainType } from '/business-rules/types';

import { loadSuccess, loadFailure } from './actions';

export function* loadSaga({ templateDomain }: TemplateDomainType) {
  try {
    const response = yield call(fetch, 'https://jsonplaceholder.typicode.com/posts');

    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}


export default function* saga(injector: Injector) {
  try {
    yield all([
      takeLatest(TemplateTypes.LOAD_REQUEST, loadSaga, injector),
    ]);
  } catch (e) {
    // throw e;
  }
}

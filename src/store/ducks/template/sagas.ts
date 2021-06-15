import { all, takeLatest, call, put } from 'redux-saga/effects'
import { Injector } from '~business-rules/types'
import { TemplateTypes } from './types'

import { loadSuccess, loadFailure } from './actions'

export function* loadSaga({ templateDomain }: Injector) {
  try {
    const response = yield call(
      fetch,
      'https://jsonplaceholder.typicode.com/posts'
    )

    yield put(loadSuccess(response.data))
  } catch (err) {
    yield put(loadFailure())
  }
}

export default function* saga(injector: Injector) {
  try {
    yield all([takeLatest(TemplateTypes.LOAD_REQUEST, loadSaga, injector)])
  } catch (e) {
    // throw e;
  }
}

import {
 compose, createStore, applyMiddleware, Store,
} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './ducks/rootReducers';
import rootSaga from './ducks/rootSaga';

import BusinessRulesInjector from '../business-rules';

export interface ApplicationState {
  template: {}
}

declare global {
  interface Window { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: <R>(a: R) => R; }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga, BusinessRulesInjector);

export default store;

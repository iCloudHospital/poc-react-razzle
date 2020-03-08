import { createEpicMiddleware } from 'redux-observable';
import { RootAction, RootState, Services } from 'services';
import { createStore, applyMiddleware } from 'redux';
import services from '../services';
import rootReducer from './root-reducer';
import rootEpic from './root-epic';
export const epicMiddleware = createEpicMiddleware<
  RootAction,
  RootAction,
  RootState,
  Services
>({
  dependencies: services
});

const middlewares = [epicMiddleware];
const enhancer = applyMiddleware(...middlewares);
const intialState = {};

const store = createStore(rootReducer, intialState, enhancer);
epicMiddleware.run(rootEpic);

export default store;

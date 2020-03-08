import { combineEpics } from 'redux-observable';
import { loadTodosEpic } from '../features/todos/epics';

export default combineEpics(loadTodosEpic);

import { createReducer } from 'typesafe-actions';
import {
  todoActionTypes,
  loadTodosAsync,
  addTodo,
  removeTodo
} from './actions';
import { Todo } from 'TodoModels';
import { combineReducers } from 'redux';

export const isLoadingTodos = createReducer<boolean, todoActionTypes>(
  false as boolean
)
  .handleAction([loadTodosAsync.request], (state, action) => true)
  .handleAction([loadTodosAsync.success, loadTodosAsync.failure], () => false);

export const todos = createReducer<Todo[], todoActionTypes>([] as Todo[])
  .handleAction([loadTodosAsync.success], (state, action) => action.payload)
  .handleAction([addTodo], (state, action) => [...state, action.payload])
  .handleAction([removeTodo], (state, action) =>
    state.filter(i => i.id !== action.payload)
  );

const todoReducer = combineReducers({
  isLoadingTodos,
  todos
});

export default todoReducer;
export type TodoState = ReturnType<typeof todoReducer>;

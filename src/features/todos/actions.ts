import { createAction, createAsyncAction, ActionType } from 'typesafe-actions';
import cuid from 'cuid';
import { Todo } from 'TodoModels';

export const addTodo = createAction('ADD_TOTO', (title: string) => ({
  id: cuid(),
  title
}))<Todo>();

export const removeTodo = createAction('REMOVE_TODO')<string>();

export const loadTodosAsync = createAsyncAction(
  'LOAD_TODOS_REQUEST',
  'LOAD_TODOS_SUCCESS',
  'LOAD_TODOS_FAILURE'
)<undefined, Todo[], string>();

export type todoActionTypes =
  | ActionType<typeof loadTodosAsync>
  | ActionType<typeof addTodo>
  | ActionType<typeof removeTodo>;

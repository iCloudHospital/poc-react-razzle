import { Epic } from 'redux-observable';
import { todoActionTypes, loadTodosAsync } from './actions';
import { RootState, Services } from 'services';
import { from, of } from 'rxjs';
import { filter, switchMap, map, catchError, tap } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';

export const loadTodosEpic: Epic<
  todoActionTypes,
  todoActionTypes,
  RootState,
  Services
> = (action$, state$, { api }) =>
  action$.pipe(
    filter(isActionOf(loadTodosAsync.request)),
    tap(() => console.log('inside pipe tap')),
    switchMap(() =>
      from(api.todos.loadSnapshot()).pipe(
        map(loadTodosAsync.success),
        catchError((message: string) => of(loadTodosAsync.failure(message)))
      )
    )
  );

import { Todo } from 'TodoModels';

const todos: Todo[] = [
  { id: '0', title: 'My first Todo!' },
  { id: '1', title: '...' }
];

export function loadSnapshot(): Promise<Todo[]> {
    console.log(`loadTodos`)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(todos);
    }, 500);
  });
}

import React from 'react';
import logo from './react.svg';
import './Home.css';
import store from './store';
import { Provider } from 'react-redux'
import TodoList from './features/todos/components/TodoList';
import TodoListOperations from './features/todos/components/TodoOperations';
class Home extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="Home">
          <div className="Home-header">
            <img src={logo} className="Home-logo" alt="logo" />
            <h2>Welcome to Razzle</h2>
            <TodoListOperations />
            <TodoList />
          </div>
        </div>
      </Provider>
    );
  }
}

export default Home;

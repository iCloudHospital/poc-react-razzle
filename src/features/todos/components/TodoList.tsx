import React from 'react'
import { RootState } from 'services'
import { getTodos } from '../selectors'
import { removeTodo } from '../actions'
import TodoListItem from './TodoListItem'
import { connect } from 'react-redux'
const mapStateToProps = (state: RootState) => ({
    isLoading: state.todos.isLoadingTodos,
    todos: getTodos(state.todos)
})

const dispatchProps = {
    removeTodo: removeTodo
}

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps

const TodoList = ({ todos, isLoading, removeTodo }: Props) => {
    if (isLoading) {
        return <p>...Loading...</p>
    }

    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>
                    <TodoListItem title={todo.title} onRemoveClick={() => removeTodo(todo.id)} />
                </li>
            ))}
        </ul>
    )
}

export default connect(mapStateToProps, dispatchProps)(TodoList)
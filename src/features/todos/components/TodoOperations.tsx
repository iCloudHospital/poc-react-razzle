import React from 'react'
import { RootState } from 'services'
import { loadTodosAsync } from '../actions'
import { connect } from 'react-redux'

const mapStateToProps = (state: RootState) => ({
    isLoading: state.todos.isLoadingTodos
})

const dispatchProps = {
    loadTodos: loadTodosAsync.request
}

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps

type State = {}

const TodoOperations = ({ isLoading, loadTodos }: Props) => {
    return (
        <section>
            <button onClick={() => loadTodos()} disabled={isLoading}>
                load todos
            </button>
        </section>
    )
}

export default connect(mapStateToProps, dispatchProps)(TodoOperations)
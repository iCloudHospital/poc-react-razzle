import React from 'react'

interface Props {
    title: string;
    onRemoveClick: () => void
}

const TodoListItem = ({ title, onRemoveClick }: Props) => {
    return (
        <>
            <div>
                {title}
                <div onClick={onRemoveClick}>x</div>
            </div>
        </>
    )
}

export default TodoListItem
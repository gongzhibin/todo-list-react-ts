import React from 'react';

export interface Props {
  todoItem: string;
}

function TodoList({ todoItem }: Props) {
    return (
        <div className="todo-list-item">
            { todoItem }
        </div>
    );
}

export default TodoList;
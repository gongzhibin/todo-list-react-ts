import React from 'react';

export interface Props {
  todoItem: string;
  index: number
}

function TodoList({ todoItem, index }: Props) {
    return (
        <div className="todo-list-item">
            { index + 1 }. { todoItem }
        </div>
    );
}

export default TodoList;
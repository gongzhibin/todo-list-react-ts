import React from 'react';
import TodoListItem from '../TodoListItem';
const todos: Array<string> = ['init todo'];

function TodoList() {
    const TodoListContent = todos.map((todo, index) => {
        return <TodoListItem todoItem = { todo } key = { index } />
    });

    return (
        <div className="todo-list">
            <header className="todo-list__header">YOUR TODO LIST</header>
            <div className="todo-list__input">
                <input type="text" placeholder="add your todo"/>
                <button>add</button>
            </div>
            <div className="todo-list__content">{ TodoListContent }</div>
        </div>
    );
}

export default TodoList;
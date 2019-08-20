import React, { Component, ChangeEvent, KeyboardEvent } from 'react';
import TodoListItem from '../TodoListItem';
const todos: Array<string> = [];

interface TodoListProps { };

interface TodoListState {
    todos: Array<string>,
    todoInput: string
}

class TodoList extends Component<TodoListProps, TodoListState> {
    constructor(props: TodoListProps) {
        super(props);
        this.state = { todos, todoInput: '' };
    }

    handleTodoChange = (event: ChangeEvent<HTMLInputElement>) => {
        const todoInput = event.target.value;
        if (todoInput) {
            this.setState({ todoInput });
        }
    }

    handleKeyUp = (event: KeyboardEvent) => {
        if(event.keyCode === 13) {
            this.handleAddTodo()
        }
    }

    handleAddTodo = () => {
        const { todoInput, todos } = this.state;
        if (todoInput) {
            if(todos.indexOf(todoInput) > -1) {
                this.setState({ todoInput: '' });
                console.warn('Dont add a same todo');
                return;
            }
            todos.push(todoInput);
            this.setState({ todos, todoInput: '' });
        }
    }

    render() {
        const TodoListContent = this.state.todos.map((todo, index) => {
            return <TodoListItem todoItem = { todo } key = { todo } index = { index }  />
        });

        return (
            <div className="todo-list">
                <header className="todo-list__header">YOUR TODO LIST</header>
                <div className="todo-list__input">
                    <input type="text" placeholder="add your todo" value = { this.state.todoInput } onChange = { this.handleTodoChange } onKeyUp = { this.handleKeyUp }/>
                    <button onClick = { this.handleAddTodo }>add</button>
                </div>
                <div className="todo-list__content">{ TodoListContent }</div>
            </div>
        );
    }
}

export default TodoList;
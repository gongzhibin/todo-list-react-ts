import React, { Component, ChangeEvent, KeyboardEvent, FocusEvent } from 'react';

interface TodoItemProps {
  todoItem: string;
  index: number,
  onDeleteTodoItem: Function,
  onChangeTodoItem: Function
}

interface TodoItemState {
    isShowInputItem: Boolean
    todoItem: string
}

class TodoList extends Component<TodoItemProps, TodoItemState> {
    constructor(props: TodoItemProps) {
        super(props);
        this.state = {
            isShowInputItem: false,
            todoItem: props.todoItem
        }
    }

    deleteItem = () => {
        this.props.onDeleteTodoItem(this.props.index);
    }

    handleShowInputItem = () => {
        this.setState({ isShowInputItem: true });
    }

    handleInputEdit = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({ todoItem: event.target.value });
    }

    handleInputEnter = (event: KeyboardEvent<HTMLInputElement> ) => {
        if (event.keyCode === 13) {
            this.setState({ isShowInputItem: false });
            this.props.onChangeTodoItem(this.props.index, this.state.todoItem );
        }
    }

    handleInputBlur = () => {
        // this.props.onChangeTodoItem(this.props.index, this.state.todoItem );
    }
    
    render() {
        const { index } = this.props;
        const { isShowInputItem, todoItem } = this.state;
        const spanItem = (<span onClick = { this.handleShowInputItem } >{ todoItem }</span>);
        const inputItem = (<input
            type="text"
            value = { todoItem }
            onChange = { this.handleInputEdit }
            onKeyUp = { this.handleInputEnter }
            onBlur = { this.handleInputBlur }
        />);
        const item = isShowInputItem ? inputItem : spanItem;
        return (
            <div className="todo-list-item">
                <span>{ index + 1 }. </span>
                { item }
                <button onClick = { this.deleteItem }>delete</button>
            </div>
        );
    }
}

export default TodoList;
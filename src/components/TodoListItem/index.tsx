import React, { ChangeEvent, KeyboardEvent, useState } from 'react';

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

function TodoList(props: TodoItemProps) {
    const { index, onDeleteTodoItem, onChangeTodoItem,  } = props;
    const [isShowInputItem, setIsShowInputItem] = useState(false);
    const [todoItem, setTodoItem] = useState(props.todoItem);

    function deleteItem() {
        onDeleteTodoItem(index);
    }

    function handleShowInputItem() {
        setIsShowInputItem(true);
    }

    function handleInputEdit(event: ChangeEvent<HTMLInputElement>){
        setTodoItem(event.target.value);
    }

    function handleInputEnter(event: KeyboardEvent<HTMLInputElement>) {
        if (event.keyCode === 13) {
            setIsShowInputItem(false);
            onChangeTodoItem(index, todoItem );
        }
    }

    function handleInputBlur() {
        // onChangeTodoItem(index, todoItem );
    }

    const spanItem = (<span onClick = { handleShowInputItem } >{ todoItem }</span>);
    const inputItem = (<input
        type="text"
        value = { todoItem }
        onChange = { handleInputEdit }
        onKeyUp = { handleInputEnter }
        onBlur = { handleInputBlur }
    />);
    const item = isShowInputItem ? inputItem : spanItem;
    return (
        <div className="todo-list-item">
            <span>{ index + 1 }. </span>
            { item }
            <button onClick = { deleteItem }>delete</button>
        </div>
    );
}

export default TodoList;
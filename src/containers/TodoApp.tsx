import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoList from '../components/TodoList';
import TodoInput from '../components/TodoInput';
import { RootState } from '../modules';
import { addTodo, removeTodo, toggleTodo } from '../modules/todos';

function TodoApp() {
    const todos = useSelector((state: RootState) => state.todos);
    const dispatch = useDispatch();

    const onInput = (text: string) => {
        dispatch(addTodo(text));
    }

    const onToggle = (id: number) => {
        dispatch(toggleTodo(id));
    }

    const onRemove = (id: number) => {
        dispatch(removeTodo(id));
    }

    return (
        <>
            <TodoInput onInput={onInput} />
            <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
        </>
    )
}

export default TodoApp;
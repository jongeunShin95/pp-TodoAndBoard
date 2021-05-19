import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoList from '../components/TodoList';
import TodoInput from '../components/TodoInput';
import { RootState } from '../modules';
import { addTodo } from '../modules/todos';

function TodoApp() {
    const todos = useSelector((state: RootState) => state.todos);
    const dispatch = useDispatch();

    const onInput = (text: string) => {
        dispatch(addTodo(text));
    }

    return (
        <>
            <TodoInput onInput={onInput} />
            <TodoList todos={todos} />
        </>
    )
}

export default TodoApp;
import React from 'react';
import { useSelector } from 'react-redux';
import TodoList from '../components/TodoList';
import { RootState } from '../modules';

function TodoApp() {
    const todos = useSelector((state: RootState) => state.todos);
    return (
        <>
            <TodoList todos={todos} />
        </>
    )
}

export default TodoApp;
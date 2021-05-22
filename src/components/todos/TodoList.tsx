import React from 'react';
import { Todo } from '../../modules/todos';
import TodoItem from './TodoItem';

type TodoListProps = {
    todos: Todo[];
    onToggle: (id: number) => void;
    onRemove: (id: number) => void;
}

function TodoList({ todos, onToggle, onRemove }: TodoListProps) {
    return (
        <ul>
            {todos.map(todo => (
                <TodoItem todo={todo} key={todo.id} onToggle={onToggle} onRemove={onRemove} />
            ))}
        </ul>
    )
}

export default TodoList;
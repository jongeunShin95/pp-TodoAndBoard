import React from 'react';
import { Todo } from '../modules/todos';

type TodoProps = {
    todo: Todo;
}

function TodoItem({ todo }: TodoProps) {
    return (
        <li>
            { todo.text }
        </li>
    );
}

export default TodoItem;
import React from 'react';
import styled, { css } from 'styled-components';
import { Todo } from '../modules/todos';

type TodoProps = {
    todo: Todo;
    onToggle: (id: number) => void;
    onRemove: (id: number) => void;
}

const TodoTextComponent = styled.div<{ done: boolean }>`
    ${props =>
        props.done &&
        css`
            text-decoration: underline;
        `
    }
`;

function TodoItem({ todo, onToggle, onRemove }: TodoProps) {
    return (
        <li style={{ display: "flex" }}>
            <TodoTextComponent done={todo.done} onClick={() => onToggle(todo.id)}>{todo.text}</TodoTextComponent>
            <button onClick={() => onRemove(todo.id)}>삭제</button>
        </li>
    );
}

export default TodoItem;
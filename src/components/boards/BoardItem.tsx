import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Board } from '../../modules/boards';

type BoardProps = {
    board: Board;
    onRemove: (id: number) => void;
}

const BoardComponent = styled.div`
`;

function BoardItem({ board, onRemove }: BoardProps) {
    return (
        <li style={{ display: "flex" }}>
            <BoardComponent>{board.id} - {board.title} - {board.created_at}</BoardComponent>
            <NavLink to={"/board/" + board.id}>상세보기</NavLink>
            <button onClick={() => onRemove(board.id)}>삭제</button>
        </li>
    );
}

export default BoardItem;
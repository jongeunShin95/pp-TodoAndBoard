import React from 'react';
import styled from 'styled-components';
import { Board } from '../../modules/boards';

type BoardProps = {
    board: Board;
}

const BoardComponent = styled.div`
`;

function BoardItem({ board }: BoardProps) {
    return (
        <li style={{ display: "flex" }}>
            <BoardComponent>{board.id} - {board.title} - {board.created_at}</BoardComponent>
        </li>
    );
}

export default BoardItem;
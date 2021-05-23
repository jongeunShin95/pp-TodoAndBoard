import React from 'react';
import styled from 'styled-components';
import { Board } from '../../modules/boards';

type BoardProps = {
    board: Board;
}

const BoardComponent = styled.div`
`;

function BoardDetailItem({ board }: BoardProps) {
    return (
        <BoardComponent>{board.id} - {board.title} - {board.content} - {board.created_at}</BoardComponent>
    );
}

export default BoardDetailItem;
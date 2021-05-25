import React, { useState } from 'react';
import styled from 'styled-components';
import { Board } from '../../modules/boards';
import BoardModify from './BoardMofify';

type ModifyProps = {
    id: number;
    title: string;
    content: string;
}

type BoardProps = {
    board: Board;
    onModify: ({ id, title, content }: ModifyProps) => void;
}

const BoardComponent = styled.div`
`;

function BoardDetailItem({ board, onModify }: BoardProps) {
    const [modify, setModify] = useState(false); // 수정페이지인지 아닌지
    

    if (modify) return <BoardModify board={board} onModify={onModify} />;
    return (
        <>
            <BoardComponent>{board.id} - {board.title} - {board.content} - {board.created_at}</BoardComponent>
            <button onClick={() => setModify(true)}>수정하기</button>
        </>
    );
}

export default BoardDetailItem;
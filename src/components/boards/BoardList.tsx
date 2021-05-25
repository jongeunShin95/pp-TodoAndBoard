import React from 'react';
import { Board } from '../../modules/boards';
import BoardItem from './BoardItem';

type BoardListProps = {
    boards: Board[];
    onRemove: (id: number) => void;
}

function BoardList({ boards, onRemove }: BoardListProps) {
    return (
        <ul>
            {
                boards.map(board => (
                    <BoardItem board={board} key={board.id} onRemove={onRemove} />
                ))
            }
        </ul>
    )
}

export default BoardList;
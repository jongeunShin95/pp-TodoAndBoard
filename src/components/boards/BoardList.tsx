import React from 'react';
import { Board } from '../../modules/boards';
import BoardItem from './BoardItem';

type BoardListProps = {
    boards: Board[];
}

function BoardList({ boards }: BoardListProps) {
    return (
        <ul>
            {
                boards.map(board => (
                    <BoardItem board={board} key={board.id}/>
                ))
            }
        </ul>
    )
}

export default BoardList;
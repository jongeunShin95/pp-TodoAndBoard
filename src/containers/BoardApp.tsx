import React from 'react';
import { useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import BoardDetailItem from '../components/boards/BoardDetailItem';
import BoardList from '../components/boards/BoardList';
import { RootState } from '../modules';

type BoardDetailProps = {
    id: string;
}

function BoardApp({ match }: RouteComponentProps<BoardDetailProps>) {
    const { id } = match.params;
    const boards = useSelector((state: RootState) => state.boards);
    
    if (!id) return <BoardList boards={boards}/>;
    return (
        <>
            <BoardDetailItem board={boards[Number(id) - 1]} />
        </>
    )
}

export default BoardApp;
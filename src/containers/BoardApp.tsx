import React from 'react';
import { useSelector } from 'react-redux';
import BoardList from '../components/boards/BoardList';
import { RootState } from '../modules';

function BoardApp() {
    const boards = useSelector((state: RootState) => state.boards);
    return (
        <>
            <BoardList boards={boards}/>
        </>
    )
}

export default BoardApp;
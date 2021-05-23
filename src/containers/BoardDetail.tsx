import React from 'react';
import { useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import BoardDetailItem from '../components/boards/BoardDetailItem';
import { RootState } from '../modules';

type BoardDetailProps = {
    id: string;
}

function BoardDetail({ match }: RouteComponentProps<BoardDetailProps>) {
    const { id } = match.params;
    const boards = useSelector((state: RootState) => state.boards);
    const board = boards[Number(id) - 1];

    if (!board) return <div>없는 게시판입니다.</div>;
    return (
        <>
            <BoardDetailItem board={boards[Number(id) - 1]} />
        </>
    );
}

export default BoardDetail;
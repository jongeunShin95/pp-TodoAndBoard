import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import BoardDetailItem from '../components/boards/BoardDetailItem';
import BoardList from '../components/boards/BoardList';
import { RootState } from '../modules';
import { NavLink } from 'react-router-dom';
import BoardInput from '../components/boards/BoardInput';
import { addBoard, modifyBoard, removeBoard } from '../modules/boards';

type BoardDetailProps = {
    id: string;
}

type AddProps = {
    title: string,
    content: string
}

type ModifyProps = {
    id: number;
    title: string;
    content: string;
}

function BoardApp({ match, history, location }: RouteComponentProps<BoardDetailProps>) {
    const { id } = match.params;
    const boards = useSelector((state: RootState) => state.boards);
    const dispatch = useDispatch();

    const onInput = ({ title, content }: AddProps) => {
        dispatch(addBoard({ title, content }));
        history.push('/Board');
    }

    const onRemove = (id: number) => {
        dispatch(removeBoard(id));
    }

    const onModify = ({ id, title, content }: ModifyProps) => {
        dispatch(modifyBoard({ id, title, content }));
        history.push('/Board');
    }

    if (id === "write") return <BoardInput onInput={onInput} />;
    if (!id) return (
        <>
            <BoardList boards={boards} onRemove={onRemove} />
            <NavLink to="/Board/write">글작성</NavLink>
        </>
    )
    return (
        <>
            <BoardDetailItem board={boards[Number(id) - 1]} onModify={onModify} />
        </>
    )
}

export default BoardApp;
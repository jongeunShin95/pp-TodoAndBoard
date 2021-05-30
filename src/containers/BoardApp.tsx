import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import BoardList from '../components/boards/BoardList';
import { RootState } from '../modules';
import { NavLink } from 'react-router-dom';
import BoardInput from '../components/boards/BoardInput';
import { addBoard, modifyBoard, removeBoard } from '../modules/boards';
import Button from '@material-ui/core/Button';

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
    return (
        <>
            <Button variant="outlined"><NavLink to="/Board/write" style={{ textDecoration: 'none', color: 'black' }}>글작성</NavLink></Button>
            <BoardList boards={boards} onRemove={onRemove} onModify={onModify} />
        </>
    )
}

export default BoardApp;
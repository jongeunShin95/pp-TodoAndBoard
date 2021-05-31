import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import BoardList from '../components/boards/BoardList';
import { RootState } from '../modules';
import { NavLink } from 'react-router-dom';
import BoardInput from '../components/boards/BoardInput';
import { addBoard, Board, modifyBoard, removeBoard } from '../modules/boards';
import Button from '@material-ui/core/Button';
import BoardModify from '../components/boards/BoardMofify';

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
    const [modify, setModify] = useState(false); // 수정페이지인지 아닌지
    const [board, setBoard] = useState<Board>({ id: 0, title: '', content: '', created_at: ''});
    const boards = useSelector((state: RootState) => state.boards);
    const dispatch = useDispatch();

    const handleSetModify = (curId: number) => {
        setBoard({
          id: boards[curId].id,
          title: boards[curId].title,
          content: boards[curId].content,
          created_at: boards[curId].created_at
        });
        setModify(true);
      }

    const onInput = ({ title, content }: AddProps) => {
        dispatch(addBoard({ title, content }));
        history.push('/Board');
    }

    const onRemove = (id: number) => {
        dispatch(removeBoard(id));
    }

    const onModify = ({ id, title, content }: ModifyProps) => {
        dispatch(modifyBoard({ id, title, content }));
        setModify(false);
    }

    if (id === "write") return <BoardInput onInput={onInput} />;
    if (modify) return <BoardModify board={board} onModify={onModify} />;
    return (
        <>
            <Button variant="outlined"><NavLink to="/Board/write" style={{ textDecoration: 'none', color: 'black' }}>글작성</NavLink></Button>
            <BoardList boards={boards} onRemove={onRemove} handleSetModify={handleSetModify} />
        </>
    )
}

export default BoardApp;
import { createReducer } from 'typesafe-actions';
import { BoardsState } from './types';

const current = new Date();
const currentTime = current.getFullYear() + "년 " + current.getMonth() + "월 " + current.getDate() + "일 " + current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds()

const initialState: BoardsState = [
    {
        id: 1,
        title: "제목입니다. - 1",
        content: "내용입니다. - 1",
        created_at: currentTime
    },
    {
        id: 2,
        title: "제목입니다. - 2",
        content: "내용입니다. - 2",
        created_at: currentTime
    }
];

const boards = createReducer<BoardsState, any>(initialState, {

});

export default boards;
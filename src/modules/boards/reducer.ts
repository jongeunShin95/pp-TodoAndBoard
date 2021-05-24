import { createReducer } from 'typesafe-actions';
import { ADD_BOARD } from './actions';
import { BoardsAction, BoardsState } from './types';

const current = new Date();
const currentTime = current.getFullYear() + "년 " + current.getMonth() + "월 " + current.getDate() + "일 " + current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds()

const initialState: BoardsState = [];

const boards = createReducer<BoardsState, BoardsAction>(initialState, {
    [ADD_BOARD]: (state, action) => state.concat({
        ...action.payload,
        created_at: currentTime
    }),
});

export default boards;
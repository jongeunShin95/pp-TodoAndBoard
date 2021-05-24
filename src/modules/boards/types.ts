import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type BoardsAction = ActionType<typeof actions>;

export type Board = {
    id: number;
    title: string;
    content: string;
    created_at: string;
}

export type BoardsState = Board[];
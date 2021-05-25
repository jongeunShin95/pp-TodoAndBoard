import { createAction } from "typesafe-actions";

export const ADD_BOARD = 'boards/ADD_BOARD' as const;
export const MODIFY_BOARD = 'boards/MODIFY_BOARD' as const;
export const REMOVE_BOARD = 'boards/REMOVE_BOARD';

let nextId = 1;

type AddProps = {
    title: string;
    content: string;
};

type ModifyProps = {
    id: number;
    title: string;
    content: string;
}

export const addBoard = ({ title, content }: AddProps) => ({
    type: ADD_BOARD,
    payload: {
        id: nextId++,
        title,
        content
    }
});

export const modifyBoard = (board: ModifyProps) => ({
    type: MODIFY_BOARD,
    payload: {
        id: board.id,
        title: board.title,
        content: board.content
    }
});

export const removeBoard = createAction(REMOVE_BOARD)<number>();
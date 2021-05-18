import { ActionType } from 'typesafe-actions';

export type Todo = {
    id: number;
    text: string;
    done: boolean;
}

export type TodosState = Todo[];
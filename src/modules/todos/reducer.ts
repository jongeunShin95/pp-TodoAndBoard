import { createReducer } from 'typesafe-actions';
import { TodosState } from './types';


const initialState: TodosState = [
    {
        id: 1,
        text: "todo",
        done: false
    },
    {
        id: 2,
        text: "todo2",
        done: false
    },
    {
        id: 3,
        text: "todo3",
        done: false
    },
];

const todos = createReducer<TodosState, any>(initialState, {

});

export default todos;
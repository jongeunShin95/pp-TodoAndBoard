import { createReducer } from 'typesafe-actions';
import { ADD_TODO } from './actions';
import { TodosAction, TodosState } from './types';


const initialState: TodosState = [];

const todos = createReducer<TodosState, TodosAction>(initialState, {
    [ADD_TODO]: (state, action) => state.concat({
        ...action.payload,
        done: false
    }),
});

export default todos;
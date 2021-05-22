import { combineReducers } from 'redux';
import boards from './boards';
import todos from './todos';

const rootReducer = combineReducers({
    todos,
    boards
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
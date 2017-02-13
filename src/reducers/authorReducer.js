import * as ActionTypes from './../actions/actionTypes';
import initialState from './initialState';

export default function authorReducer(state=initialState.authors, action){
    switch (action.type) {
        case ActionTypes.LOAD_AUTHOR_SUCCESS:
            return action.authors;
    
        default:
            return state;
    }
}
import AuthorApi from './../api/mockAuthorApi';
import * as types from './actionTypes';

function loadAuthorSuccess(authors){
    return{
        type:types.LOAD_AUTHOR_SUCCESS,
        authors
    }
}

export function loadAuthors(){
    return dispatch => {
        return AuthorApi.getAllAuthors()
            .then(authors=>{
                dispatch(loadAuthorSuccess(authors))
            })
            .catch(error=>{
                throw error;
            });
    }
}
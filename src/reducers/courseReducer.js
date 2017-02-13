import * as ActionTypes from './../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action) {
    switch (action.type) {
        case ActionTypes.LOAD_COURSES_SUCCESS:
            return action.courses;

        case ActionTypes.CREATE_COURSE_SUCCESS:
            return [
                ...state,
                Object.assign({}, action.course)
            ];

        case ActionTypes.UPDATE_COURSE_SUCCESS:
            return [
                ...state.filter((course) => { course.id !== action.course }),
                Object.assign({}, action.course)
            ]

        default:
            return state;
    }
}
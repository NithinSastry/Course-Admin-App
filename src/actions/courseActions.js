import * as ActionTypes from './actionTypes';
import CourseApi from '../api/mockCourseApi';

function loadCoursesSuccess(courses) {
    return {
        type: ActionTypes.LOAD_COURSES_SUCCESS,
        courses
    }
}

function updateCourseSuccess(course) {
    return {
        type: ActionTypes.UPDATE_COURSE_SUCCESS,
        course
    }
}

function saveCoursesSuccess(course) {
    return {
        type: ActionTypes.CREATE_COURSE_SUCCESS,
        course
    }
}


export function loadCourses() {
    return (dispatch) => {
        return CourseApi.getAllCourses()
            .then(courses => {
                dispatch(loadCoursesSuccess(courses));
            })
            .catch(error => {
                throw error;
            });
    }
}


export function saveCourse(course) {
    return (dispatch) => {
        return CourseApi.saveCourse(course)
            .then(savedCourse => {
                course.id ? dispatch(updateCourseSuccess(savedCourse)) : dispatch(saveCoursesSuccess(savedCourse))
            })
            .catch(error => {
                throw error;
            })
    }
}
import * as types from './actionTypes';

export function createCourse(course) {
    return {
        type: types.CREATE_STORE,
        course
    }
}
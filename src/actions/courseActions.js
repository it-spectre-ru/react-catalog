import * as types from './actionTypes';
import courseApi from '../api/mockAuthorApi';


export function loadCoursesSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses }
}

export function loadCourse() {
  return function (dispatch) {
   return courseApi.getAllCourses().then(courses => {
     dispatch(loadCoursesSuccess(courses));
   }).catch(error => {
     throw(error);
   });
  }
}





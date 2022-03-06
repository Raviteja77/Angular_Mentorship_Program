import { state } from '@angular/animations';
import { Action, createReducer, on } from '@ngrx/store';
import { CoursesActions } from './courses.actions';

export const coursesFeatureKey = 'courses';

export interface CoursesState {
  allCourses: any[];
  course: [];
  isAllCoursesLoading: boolean;
  isSingleCourseLoading: boolean;
  isSearchState: boolean;
  errorMessage: string;
}

const initialState: CoursesState = {
  allCourses: [],
  course: [],
  isAllCoursesLoading: true,
  isSingleCourseLoading: true,
  isSearchState: false,
  errorMessage: '',
};

const reducer = createReducer(
  initialState,

  on(CoursesActions.REQUEST_ALL_COURSES_SUCCESS, (state, { allCourses }) => ({
    ...state,
    allCourses: allCourses.allCourses,
    isAllCoursesLoading: allCourses.isAllCoursesLoading,
    course: allCourses.course,
    isSingleCourseLoading: allCourses.isSingleCourseLoading,
  })),

  on(CoursesActions.REQUEST_ALL_COURSES_FAILURE, (state, { allCourses }) => ({
    ...state,
    errorMessage: allCourses.errorMessage,
  })),

  on(
    CoursesActions.REQUEST_SINGLE_COURSE_SUCCESS,
    (state, { singleCourse }) => ({
      ...state,
      course: singleCourse.course,
      isSingleCourseLoading: false,
    })
  ),

  on(
    CoursesActions.REQUEST_SINGLE_COURSE_FAILURE,
    (state, { singleCourse }) => ({
      ...state,
      errorMessage: singleCourse.errorMessage,
    })
  ),

  on(
    CoursesActions.REQUEST_DELETE_COURSE_FAILURE,
    (state, { deleteCourse }) => ({
      ...state,
      errorMessage: deleteCourse.errorMessage,
    })
  ),

  on(CoursesActions.REQUEST_EDIT_COURSE_FAILURE, (state, { editCourse }) => ({
    ...state,
    errorMessage: editCourse.errorMessage,
  })),

  on(CoursesActions.REQUEST_CREATE_COURSE_FAILURE, (state, { createCourse }) => ({
      ...state,
      errorMessage: createCourse.errorMessage,
  }))

);

export const CoursesReducer = (
  state: CoursesState | undefined,
  action: Action
): CoursesState => reducer(state, action);

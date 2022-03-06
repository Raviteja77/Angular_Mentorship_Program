import { createAction, props } from "@ngrx/store";
import { CoursesState } from "./courses.reducer";


const REQUEST_ALL_COURSES = createAction('[COURSES REQUEST] Request all courses');
const REQUEST_ALL_COURSES_SUCCESS = createAction('[COURSES REQUEST] Request all courses success', props<{ allCourses: CoursesState }>());
const REQUEST_ALL_COURSES_FAILURE = createAction('[COURSES REQUEST] Request all courses failure', props<{ allCourses: CoursesState }>());
const REQUEST_SINGLE_COURSE = createAction('[COURSE REQUEST] Request single course', props<{ body: string }>());
const REQUEST_SINGLE_COURSE_SUCCESS = createAction('[COURSE REQUEST] Request single course success', props<{ singleCourse: CoursesState }>());
const REQUEST_SINGLE_COURSE_FAILURE = createAction('[COURSE REQUEST] Request single course failure', props<{ singleCourse: CoursesState }>());
const REQUEST_DELETE_COURSE = createAction('[DELETE REQUEST] Request delete course', props<{ body: string }>());
const REQUEST_DELETE_COURSE_FAILURE = createAction('[DELETE REQUEST] Request delete course failure', props<{ deleteCourse: CoursesState }>());
const REQUEST_EDIT_COURSE = createAction('[EDIT REQUEST] Request edit course', props<{ body: any }>());
const REQUEST_EDIT_COURSE_FAILURE = createAction('[EDIT REQUEST] Request edit course failure', props<{ editCourse: CoursesState }>());
const REQUEST_CREATE_COURSE = createAction('[CREATE REQUEST] Request create course', props<{ body: any }>());
const REQUEST_CREATE_COURSE_FAILURE = createAction('[CREATE REQUEST] Request create course failure', props<{ createCourse: CoursesState }>());

export const CoursesActions = {
    REQUEST_ALL_COURSES,
    REQUEST_ALL_COURSES_SUCCESS,
    REQUEST_ALL_COURSES_FAILURE,
    REQUEST_SINGLE_COURSE,
    REQUEST_SINGLE_COURSE_SUCCESS,
    REQUEST_SINGLE_COURSE_FAILURE,
    REQUEST_DELETE_COURSE,
    REQUEST_DELETE_COURSE_FAILURE,
    REQUEST_EDIT_COURSE,
    REQUEST_EDIT_COURSE_FAILURE,
    REQUEST_CREATE_COURSE,
    REQUEST_CREATE_COURSE_FAILURE,
}
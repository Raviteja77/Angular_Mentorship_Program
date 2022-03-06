import { createSelector } from "@ngrx/store"
import { State } from ".."
import { CoursesState } from "./courses.reducer"


export const isAllCoursesLoadingSelector = createSelector(
    ( state: State ) => state.courses,
    ( courses: CoursesState ) => courses.isAllCoursesLoading
)

export const isSearchingStateSelector = createSelector(
    ( state: State ) => state.courses,
    ( courses: CoursesState ) => courses.isSearchState
)

export const isSingleCourseLoadingSelector = createSelector(
    ( state: State ) => state.courses,
    ( courses: CoursesState ) => courses.isSingleCourseLoading
)

export const getAllCourses = createSelector(
    ( state: State ) => state.courses,
    ( courses: CoursesState ) => courses.allCourses
)

export const getCourse = createSelector(
    ( state: State ) => state.courses,
    ( courses: CoursesState ) => courses.course
)

export const getErrorMessage = createSelector(
    ( state: State ) => state.courses,
    ( courses: CoursesState ) => courses.errorMessage
)

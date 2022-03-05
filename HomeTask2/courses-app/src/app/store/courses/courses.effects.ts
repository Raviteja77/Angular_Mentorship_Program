import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { CoursesService } from 'src/app/services/courses/courses.service';
import { CoursesActions } from './courses.actions';

@Injectable()
export class CoursesEffects {
  constructor(
    private actions$: Actions,
    private coursesService: CoursesService,
    private router: Router
  ) {}

  getAll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoursesActions.REQUEST_ALL_COURSES),
      switchMap(() =>
        this.coursesService.getAllCourses().pipe(
          map((data: any) =>
            CoursesActions.REQUEST_ALL_COURSES_SUCCESS({
              allCourses: {
                allCourses: data.result,
                isAllCoursesLoading: false,
                course: [],
                isSearchState: false,
                isSingleCourseLoading: true,
                errorMessage: '',
              },
            })
          ),
          catchError((error) =>
            of(
              CoursesActions.REQUEST_ALL_COURSES_FAILURE({
                allCourses: {
                  errorMessage: error,
                  allCourses: [],
                  isAllCoursesLoading: true,
                  course: [],
                  isSearchState: false,
                  isSingleCourseLoading: true,
                },
              })
            )
          )
        )
      )
    )
  );

  getSpecificCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoursesActions.REQUEST_SINGLE_COURSE),
      switchMap((action) =>
        this.coursesService.getCourse(action.body).pipe(
          map(
            (data: any) =>
              CoursesActions.REQUEST_SINGLE_COURSE_SUCCESS({
                singleCourse: {
                  course: data.result,
                  isSingleCourseLoading: false,
                  allCourses: [],
                  isAllCoursesLoading: true,
                  isSearchState: false,
                  errorMessage: '',
                },
              }),
            catchError((error) =>
              of(
                CoursesActions.REQUEST_SINGLE_COURSE_FAILURE({
                  singleCourse: {
                    errorMessage: error,
                    course: [],
                    isSingleCourseLoading: true,
                    allCourses: [],
                    isAllCoursesLoading: true,
                    isSearchState: false,
                  },
                })
              )
            )
          )
        )
      )
    )
  );

  deleteCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoursesActions.REQUEST_DELETE_COURSE),
      switchMap((action) =>
        this.coursesService.deleteCourse(action.body).pipe(
          switchMap(() =>
            this.coursesService.getAllCourses().pipe(
              map((data: any) =>
                CoursesActions.REQUEST_ALL_COURSES_SUCCESS({
                  allCourses: {
                    allCourses: data.result,
                    isAllCoursesLoading: false,
                    course: [],
                    isSearchState: false,
                    isSingleCourseLoading: true,
                    errorMessage: '',
                  },
                })
              ),
              catchError((error) =>
                of(
                  CoursesActions.REQUEST_ALL_COURSES_FAILURE({
                    allCourses: {
                      errorMessage: error,
                      allCourses: [],
                      isAllCoursesLoading: true,
                      course: [],
                      isSearchState: false,
                      isSingleCourseLoading: true,
                    },
                  })
                )
              )
            )
          ),
          catchError((error) =>
            of(
              CoursesActions.REQUEST_DELETE_COURSE_FAILURE({
                deleteCourse: {
                  errorMessage: error,
                  allCourses: [],
                  isAllCoursesLoading: true,
                  course: [],
                  isSearchState: false,
                  isSingleCourseLoading: true,
                },
              })
            )
          )
        )
      )
    )
  );

  createCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoursesActions.REQUEST_CREATE_COURSE),
      switchMap((action) =>
        this.coursesService.createCourse(action.body).pipe(
          switchMap(() =>
            this.coursesService.getAllCourses().pipe(
              map((data: any) =>
                CoursesActions.REQUEST_ALL_COURSES_SUCCESS({
                  allCourses: {
                    allCourses: data.result,
                    isAllCoursesLoading: false,
                    course: [],
                    isSearchState: false,
                    isSingleCourseLoading: true,
                    errorMessage: '',
                  },
                })
              ),
              tap(() => this.router.navigate(['/courses'])),
              catchError((error) =>
                of(
                  CoursesActions.REQUEST_ALL_COURSES_FAILURE({
                    allCourses: {
                      errorMessage: error,
                      allCourses: [],
                      isAllCoursesLoading: true,
                      course: [],
                      isSearchState: false,
                      isSingleCourseLoading: true,
                    },
                  })
                )
              )
            )
          ),
          catchError((error) =>
            of(
              CoursesActions.REQUEST_CREATE_COURSE_FAILURE({
                createCourse: {
                  errorMessage: error,
                  allCourses: [],
                  isAllCoursesLoading: true,
                  course: [],
                  isSearchState: false,
                  isSingleCourseLoading: true,
                },
              })
            )
          )
        )
      )
    )
  );

  editCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoursesActions.REQUEST_EDIT_COURSE),
      switchMap((action) =>
        this.coursesService.editCourse(action.body).pipe(
          switchMap(() =>
            this.coursesService.getAllCourses().pipe(
              map((data: any) =>
                CoursesActions.REQUEST_ALL_COURSES_SUCCESS({
                  allCourses: {
                    allCourses: data.result,
                    isAllCoursesLoading: false,
                    course: [],
                    isSearchState: false,
                    isSingleCourseLoading: true,
                    errorMessage: '',
                  },
                })
              ),
              tap(() => this.router.navigate(['/courses'])),
              catchError((error) =>
                of(
                  CoursesActions.REQUEST_ALL_COURSES_FAILURE({
                    allCourses: {
                      errorMessage: error,
                      allCourses: [],
                      isAllCoursesLoading: true,
                      course: [],
                      isSearchState: false,
                      isSingleCourseLoading: true,
                    },
                  })
                )
              )
            )
          ),
          catchError((error) =>
            of(
              CoursesActions.REQUEST_EDIT_COURSE_FAILURE({
                editCourse: {
                  errorMessage: error,
                  allCourses: [],
                  isAllCoursesLoading: true,
                  course: [],
                  isSearchState: false,
                  isSingleCourseLoading: true,
                },
              })
            )
          )
        )
      )
    )
  );

}

import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { State } from "..";
import { CoursesActions } from "./courses.actions";
import { getAllCourses, getCourse, getErrorMessage, isAllCoursesLoadingSelector, isSearchingStateSelector, isSingleCourseLoadingSelector } from "./courses.selector";


@Injectable()
export class CoursesStateFacade {

    constructor(private store: Store<State>) {}

    public isAllCoursesLoading$ = this.store.pipe(select(isAllCoursesLoadingSelector));
    public isSingleCourseLoading$ = this.store.pipe(select(isSingleCourseLoadingSelector));
    public isSearchingState$ = this.store.pipe(select(isSearchingStateSelector));
    public allCourses$ = this.store.pipe(select(getAllCourses));
    public course$ = this.store.pipe(select(getCourse));
    public errorMessage$ = this.store.pipe(select(getErrorMessage));

    getAllCourses() {
        this.store.dispatch(CoursesActions.REQUEST_ALL_COURSES());
    }

    getSpecificCourse(body: string) {
        this.store.dispatch(CoursesActions.REQUEST_SINGLE_COURSE({ body }));
    }

    createCourse(body: any) {
        this.store.dispatch(CoursesActions.REQUEST_CREATE_COURSE({ body }));
    }

    editCourse(body: any) {
        this.store.dispatch(CoursesActions.REQUEST_EDIT_COURSE({ body }))
    }

    deleteCourse(body: string) {
        this.store.dispatch(CoursesActions.REQUEST_DELETE_COURSE({ body }));
    }

}
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CoursesService } from './courses.service';

@Injectable({
  providedIn: 'root'
})
export class CoursesStoreService {

  private isLoading$$ = new BehaviorSubject<boolean>(true);
  private isEditCourseLoading$$ = new BehaviorSubject<boolean>(true);
  private courses$$ = new BehaviorSubject<Array<any>>([]);
  private course$$ = new BehaviorSubject<Array<any>>([]);

  public isLoading$ = this.isLoading$$.asObservable();
  public isEditCourseLoading$ = this.isEditCourseLoading$$.asObservable();
  public courses$ = this.courses$$.asObservable();
  public course$ = this.course$$.asObservable();

  constructor(private service: CoursesService) { }

  getAllCourses() {
    this.service.getAllCourses().subscribe((data: any) => {
      this.courses$$.next(data.result);
      this.isLoading$$.next(false);
    })
  }

  getCourse(courseId: string) {
    this.service.getCourse(courseId).subscribe((data: any) => {
      this.course$$.next(data.result);
      this.isEditCourseLoading$$.next(false);
    })
  }

  createCourse(course: any, authors: string[]) {
    this.service.createCourse(course, authors).subscribe((data: any) => {
      this.courses$$.next(this.courses$$.value.concat(data.result))
    })
  }

  editCourse(editCourse: any, authors: string[]) {
    const index = this.courses$$.value.findIndex((course) => course.id === editCourse.id);
    this.service.editCourse(editCourse, authors).subscribe((data: any) => {
      this.courses$$.value[index] = data.result;
      this.courses$$.next(this.courses$$.value);
    })
  }

  deleteCourse(courseId: string) {
    this.service.deleteCourse(courseId).subscribe(() => {
      this.courses$$.next(this.courses$$.value.filter((course) => course.id !== courseId));
    })
  }

}

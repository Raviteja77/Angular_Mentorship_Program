import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesStateFacade } from 'src/app/store/courses/courses.facade';
import { buttonText } from '../../shared/constants';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  courseId: string = '';
  course: any;
  isLoading: boolean = true;

  buttonText = buttonText;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private coursesFacade: CoursesStateFacade
  ) {
    this.activatedRoute.params.subscribe((data) => {
      this.courseId = data.id;
    });
    this.coursesFacade.getSpecificCourse(this.courseId);
    this.coursesFacade.course$.subscribe((data) => {
      this.course = data;
    });
    this.coursesFacade.isSingleCourseLoading$.subscribe((data) => {
      this.isLoading = data;
    });
  }

  ngOnInit(): void {}

  goBack(): void {
    this.router.navigate(['/courses']);
  }
}

import { Component, OnInit } from '@angular/core';
import { CoursesStateFacade } from 'src/app/store/courses/courses.facade';
import { buttonText } from '../../shared/constants';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  coursesList!: any;

  isLoading!: boolean;

  buttonText = buttonText;

  constructor(private coursesFacade: CoursesStateFacade) {
    this.coursesFacade.getAllCourses();
    this.coursesFacade.allCourses$.subscribe(data => {
      this.coursesList = data;
    });
    this.coursesFacade.isAllCoursesLoading$.subscribe(data => {
      this.isLoading = data;
    });
   }

  ngOnInit(): void {
  }

}

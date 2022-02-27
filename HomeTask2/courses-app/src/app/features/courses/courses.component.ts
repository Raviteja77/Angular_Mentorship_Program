import { Component, OnInit } from '@angular/core';
import { CoursesStoreService } from 'src/app/services/courses/courses-store.service';
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

  constructor(private courses_store: CoursesStoreService) {
    this.courses_store.getAllCourses();
    this.courses_store.courses$.subscribe(data => {
      this.coursesList = data;  
    });
    this.courses_store.isLoading$.subscribe(data => {
      this.isLoading = data;
    })
   }

  ngOnInit(): void {
  }

}

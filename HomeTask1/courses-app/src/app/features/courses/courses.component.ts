import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  coursesList!: any;

  isCoursesEditable: boolean = true;

  showModal: boolean = true;

  constructor(private courses_service: CoursesService) {
    this.courses_service.getCoursesList().subscribe(data => {
      this.coursesList = data;
      console.log(this.coursesList);
    })
   }

  ngOnInit(): void {
  }

  updateModalStatus(event: any): void {
    this.showModal = event;
    console.log(this.showModal);
    
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorsStoreService } from 'src/app/services/authors/authors-store.service';
import { CoursesStoreService } from 'src/app/services/courses/courses-store.service';
import { buttonText } from '../../shared/constants';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courseId: string  ='';
  course: any;

  buttonText = buttonText;

  constructor(private activatedRoute: ActivatedRoute, private courseStore: CoursesStoreService, private authorsStore: AuthorsStoreService, private router: Router) {
    this.activatedRoute.params.subscribe(data => {
      this.courseId = data.id; 
    })
    this.courseStore.getCourse(this.courseId);
    this.courseStore.course$.subscribe(data => {
      this.course = data;
    })
   }

  ngOnInit(): void {
  }

  goBack(): void {
    this.router.navigate(['/courses']);
  }

}

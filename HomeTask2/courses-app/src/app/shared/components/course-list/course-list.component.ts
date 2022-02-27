import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { CoursesStoreService } from 'src/app/services/courses/courses-store.service';
import { UserStoreService } from 'src/app/user/services/user-store.service';
import { buttonText } from '../../constants';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  @Input()
  courseList!: any;

  isAdmin!: boolean

  @Output()
  emitEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  penIcon = faPen;

  trashIcon = faTrash;

  buttonText = buttonText;

  searchKey: string = '';

  deleteCourseId: string = '';

  constructor(private userStore: UserStoreService, private coursesStore: CoursesStoreService) {
    this.userStore.isAdmin$.subscribe((data: any) => {
      this.isAdmin = data?.result?.role.toLowerCase() === 'admin' ? true : false;
    })
  }

  ngOnInit(): void {
  }

  clickHandler(event: any): void {
    this.emitEvent.emit(event);
  }

  searchWord(event: any): void {
    this.searchKey = event;
  }

  deleteCourse(courseId: string): void {
    this.coursesStore.deleteCourse(courseId);
  }

  saveDeleteCourseId(courseId: string): void {
    this.deleteCourseId = courseId;
  }

}

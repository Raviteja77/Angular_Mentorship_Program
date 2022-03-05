import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { buttonText } from '../../constants';
import { UserFacade } from '../../../user/store/user.facade';
import { AuthFacade } from 'src/app/auth/store/auth.facade';
import { CoursesStateFacade } from 'src/app/store/courses/courses.facade';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent implements OnInit {
  @Input()
  courseList!: any;

  isAdmin!: boolean;

  @Output()
  emitEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  penIcon = faPen;

  trashIcon = faTrash;

  buttonText = buttonText;

  searchKey: string = '';

  deleteCourseId: string = '';

  constructor(
    private userFacade: UserFacade,
    private authFacade: AuthFacade,
    private coursesFacade: CoursesStateFacade
  ) {
    this.authFacade.getToken$.subscribe((data) => {
      this.userFacade.getCurrentUser(data);
    });
    this.userFacade.role$.subscribe((data) => {
      this.isAdmin = data.toLowerCase() === 'admin' ? true : false;
    });
  }

  ngOnInit(): void {}

  clickHandler(event: any): void {
    this.emitEvent.emit(event);
  }

  searchWord(event: any): void {
    this.searchKey = event;
  }

  deleteCourse(courseId: string): void {
    this.coursesFacade.deleteCourse(courseId);
  }

  saveDeleteCourseId(courseId: string): void {
    this.deleteCourseId = courseId;
  }
}

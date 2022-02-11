import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  @Input()
  courseList!: any;

  @Input()
  isCoursesEditable!: boolean;

  @Output()
  emitEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  penIcon = faPen;

  trashIcon = faTrash;

  constructor() {}

  ngOnInit(): void {
  }

  clickHandler(event: any): void {
    this.emitEvent.emit(event);
  }

}

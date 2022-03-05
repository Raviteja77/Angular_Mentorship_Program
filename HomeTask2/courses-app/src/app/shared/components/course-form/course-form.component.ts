import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthorsStateFacade } from 'src/app/store/authors/authors.facade';
import { CoursesStateFacade } from 'src/app/store/courses/courses.facade';
import { buttonText } from '../../constants';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css'],
})
export class CourseFormComponent implements OnInit {
  course!: FormGroup;
  authorsList: any;
  courseIdData: any;
  editCourse: any;
  authorsArray: string[] = [];
  authorsForCourseAuthorList: any[] = [];
  authorsForAuthorList: any[] = [];
  buttonText = buttonText;
  isLoading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private authorsFacade: AuthorsStateFacade,
    private coursesFacade: CoursesStateFacade
  ) {
    this.activatedRoute.params.subscribe((data: any) => {
      this.courseIdData = data;
    });
    this.course = this.formBuilder.group({
      authorName: this.formBuilder.control(''),
      id: this.formBuilder.control(''),
      title: this.formBuilder.control('', [Validators.required]),
      description: this.formBuilder.control('', [Validators.required]),
      duration: this.formBuilder.control('', [Validators.required]),
    });
    this.authorsFacade.getAllAuthors();
    this.authorsFacade.authors$.subscribe(data => {
      this.authorsList = data;
    })
    this.authorsForAuthorList = this.authorsList;
    if (this.courseIdData && this.courseIdData.id) {
      this.coursesFacade.getSpecificCourse(this.courseIdData.id);
      this.coursesFacade.course$.subscribe(data => {
        this.editCourse = data;
      })
      this.coursesFacade.isSingleCourseLoading$.subscribe(data => {
        this.isLoading = data;
        this.updateFormValues();
      })
    }
  }

  get form() {
    return this.course.controls;
  }

  updateFormValues(): void {
    if (!this.isLoading) {
      this.authorsForCourseAuthorList = [];
      this.authorsArray = [];
      this.course.patchValue(
        {
          id: this.editCourse.id,
          title: this.editCourse.title,
          description: this.editCourse.description,
          duration: this.editCourse.duration,
        },
        { emitEvent: true }
      );
      this.getEditCourseAuthors();
    }
  }

  addNewAuthor() {
    this.authorsForAuthorList.forEach((author: any) => {
      if (
        author.name.toLowerCase() === this.course.value.authorName.toLowerCase()
      ) {
        this.authorsArray.push(author.id);
      }
    });
  }

  pushAuthorToForm(author: any) {
    this.authorsForCourseAuthorList.push(author);
    this.authorsArray.push(author.id);
    this.authorsForAuthorList = this.authorsForAuthorList.filter((authorList: any) => authorList.id !== author.id);
  }

  removeAuthorFromForm(author: any) {
    this.authorsForCourseAuthorList = this.authorsForCourseAuthorList.filter((authorWithName: any) => authorWithName.id !== author.id);
    this.authorsArray = this.authorsArray.filter(authorArray => authorArray !== author.id);
    this.authorsForAuthorList.push(author);
  }

  getEditCourseAuthors() {
    this.editCourse.authors.forEach((editCourseAuthors: any) => {
      this.authorsForAuthorList.forEach((author: any) => {
        if (author.id === editCourseAuthors) {
          this.pushAuthorToForm(author);
        }
      });
    });
  }

  addAuthor() {
    this.authorsFacade.addAuthor(this.course.value.authorName);
  }

  submitForm(): void {
    const form = {
      course: this.course.value,
      authors: this.authorsArray
    }
    if (this.courseIdData && this.courseIdData.id) {
      this.coursesFacade.editCourse(form);
    } else {
      this.coursesFacade.createCourse(form);
    }
  }
  
  ngOnInit(): void {}

}

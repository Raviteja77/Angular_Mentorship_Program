import { AfterViewInit, Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorsStoreService } from 'src/app/services/authors/authors-store.service';
import { CoursesStoreService } from 'src/app/services/courses/courses-store.service';
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
  authorsWithNamesArray: any[] = [];
  buttonText = buttonText;
  isLoading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authorsStore: AuthorsStoreService,
    private activatedRoute: ActivatedRoute,
    private courseStore: CoursesStoreService,
    private router: Router
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
    this.authorsStore.getAllAuthors();
    this.authorsStore.authors$.subscribe((data) => {
      this.authorsList = data;
    });
    if (this.courseIdData && this.courseIdData.id) {
      this.courseStore.getCourse(this.courseIdData.id);
      this.courseStore.course$.subscribe((data) => {
        this.editCourse = data;
      });
      this.courseStore.isEditCourseLoading$.subscribe((data) => {
        this.isLoading = data;
        this.updateFormValues();
      });
    }
  }

  get form() {
    return this.course.controls;
  }

  updateFormValues(): void {
    if (!this.isLoading) {
      this.authorsWithNamesArray = [];
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
    this.authorsList.forEach((author: any) => {
      if (
        author.name.toLowerCase() === this.course.value.authorName.toLowerCase()
      ) {
        this.authorsArray.push(author.id);
      }
    });
  }

  pushAuthorToForm(author: any) {
    this.authorsWithNamesArray.push(author);
    this.authorsArray.push(author.id);
    this.authorsList = this.authorsList.filter((authorList: any) => authorList.id !== author.id);
  }

  removeAuthorFromForm(author: any) {
    this.authorsWithNamesArray = this.authorsWithNamesArray.filter((authorWithName: any) => authorWithName.id !== author.id);
    this.authorsArray = this.authorsArray.filter(authorArray => authorArray !== author.id);
    this.authorsList.push(author);
  }

  getEditCourseAuthors() {
    this.editCourse.authors.forEach((editCourseAuthors: any) => {
      this.authorsList.forEach((author: any) => {
        if (author.id === editCourseAuthors) {
          this.pushAuthorToForm(author);
        }
      });
    });
  }

  addAuthor() {
    this.authorsStore.addAuthor(this.course.value.authorName);
  }

  submitForm(): void {
    if (this.courseIdData && this.courseIdData.id) {
      this.courseStore.editCourse(this.course.value, this.authorsArray);
    } else {
      this.courseStore.createCourse(this.course.value, this.authorsArray);
    }
    this.router.navigate(['/courses']);
  }
  
  ngOnInit(): void {}

}

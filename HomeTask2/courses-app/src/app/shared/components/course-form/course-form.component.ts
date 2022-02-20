import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {buttonText} from '../../constants';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {

  course!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.course = this.formBuilder.group({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      author: new FormControl(''),
      duration: new FormControl('', [Validators.required])
    })
  }

  get form() {
    return this.course.controls;
  }

  ngOnInit(): void {
  }

  buttonText = buttonText;

  submitForm(): void {
    console.log(this.course);
  }

}

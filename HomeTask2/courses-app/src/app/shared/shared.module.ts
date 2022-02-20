import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DurationPipe } from '../pipes/duration/duration.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  ConfirmationModalComponent,
  CourseFormComponent,
  ButtonComponent,
  HeaderComponent,
  InfoComponent,
  SearchComponent,
  CourseCardComponent,
  CourseListComponent,
} from './components';
import { ReactiveFormsModule } from '@angular/forms';
import { CreationDatePipe } from '../pipes/creation-date/creation-date.pipe';
import { StringJoinerPipe } from '../pipes/string-joiner/string-joiner.pipe';

const listOfComponents = [
  ButtonComponent,
  HeaderComponent,
  InfoComponent,
  SearchComponent,
  CourseCardComponent,
  CourseListComponent,
  ConfirmationModalComponent,
  DurationPipe,
  CourseFormComponent,
  CreationDatePipe,
  StringJoinerPipe,
];

@NgModule({
  declarations: listOfComponents,
  imports: [CommonModule, FontAwesomeModule, ReactiveFormsModule],
  exports: listOfComponents,
})
export class SharedModule {}

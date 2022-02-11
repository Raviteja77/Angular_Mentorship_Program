import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { InfoComponent } from './components/info/info.component';
import { SearchComponent } from './components/search/search.component';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { DurationPipe } from '../pipes/duration.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConfirmationModalComponent } from './components';


const listOfComponents = [
  ButtonComponent,
  HeaderComponent,
  InfoComponent,
  SearchComponent,
  CourseCardComponent,
  CourseListComponent,
  ConfirmationModalComponent,
  DurationPipe
]

@NgModule({
  declarations: listOfComponents,
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: listOfComponents,
})
export class SharedModule {}

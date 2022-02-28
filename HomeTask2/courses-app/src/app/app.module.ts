import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoursesModule } from './features/courses/courses.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule} from '@angular/common/http';
import { LoginModule } from './features/login/login.module';
import { RegistrationModule } from './features/registration/registration.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { CourseModule } from './features/course/course.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoursesModule,
    FontAwesomeModule,
    HttpClientModule,
    LoginModule,
    RegistrationModule,
    SharedModule,
    AppRoutingModule,
    CourseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

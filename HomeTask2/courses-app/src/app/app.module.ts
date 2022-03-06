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
import { StoreModule } from '@ngrx/store';
import { reducers, effects } from './store/index'
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { UserFacade } from './user/store/user.facade';
import { UserEffects } from './user/store/user.effects';
import { userReducer } from './user/store/user.reducer';
import { environment } from 'src/environments/environment';
import { AuthFacade } from './auth/store/auth.facade';
import { AuthorsStateFacade } from './store/authors/authors.facade';
import { CoursesStateFacade } from './store/courses/courses.facade';

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
    CourseModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
    EffectsModule.forRoot(effects)
  ],
  providers: [UserFacade, AuthFacade, AuthorsStateFacade, CoursesStateFacade],
  bootstrap: [AppComponent]
})
export class AppModule { }

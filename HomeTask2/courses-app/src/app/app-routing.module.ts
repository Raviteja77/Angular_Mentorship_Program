import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizedGuard } from './auth/guards/authorized.guard';
import { NonAuthorizedGuard } from './auth/guards/non-authorized.guard';
import { CoursesComponent } from './features/courses/courses.component';
import { LoginComponent } from './features/login/login.component';
import { RegistrationComponent } from './features/registration/registration.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [NonAuthorizedGuard] },
  { path: 'registration', component: RegistrationComponent, canActivate: [NonAuthorizedGuard] },
  { path: 'courses', loadChildren: () => import('./features/courses/courses.module').then(m => m.CoursesModule), component: CoursesComponent, canLoad: [AuthorizedGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

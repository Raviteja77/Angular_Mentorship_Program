import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from 'src/app/auth/guards/admin.guard';
import { AuthorizedGuard } from 'src/app/auth/guards/authorized.guard';
import { CourseFormComponent } from 'src/app/shared/components';
import { CourseComponent } from '../course/course.component';

const routes: Routes = [
  { path: 'courses/add', component: CourseFormComponent, canActivate: [AdminGuard], canLoad: [AuthorizedGuard] },
  { path: 'courses/edit/:id', component: CourseFormComponent, canActivate: [AdminGuard], canLoad: [AuthorizedGuard] },
  { path: 'courses/:id', component: CourseComponent, canLoad: [AuthorizedGuard] }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }

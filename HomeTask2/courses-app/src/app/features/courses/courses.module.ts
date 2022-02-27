import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoursesRoutingModule } from './courses-routing.module';
import { AuthorizedGuard } from 'src/app/auth/guards/authorized.guard';


@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoursesRoutingModule
  ],
  providers: [AuthorizedGuard],
  exports: [
    CoursesComponent
  ]
})
export class CoursesModule { }

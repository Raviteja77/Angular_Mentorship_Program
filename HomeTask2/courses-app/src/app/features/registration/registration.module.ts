import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomDirectivesModule } from 'src/app/custom_directives/custom-directives.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    RegistrationComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    SharedModule,
    ReactiveFormsModule,
    CustomDirectivesModule,
    RouterModule
  ],
  exports: [
    RegistrationComponent
  ]
})
export class RegistrationModule { }
